import React, { useEffect } from "react";
import { useFormValue, set, unset } from "sanity";
import { TextInput } from "@sanity/ui";

// MirrorInput: Prepopulates with the value of another field in the document
export const MirrorInput = (props: {
  onChange: any;
  value?: string;
  elementProps: any;
  schemaType: any;
}) => {
  const { onChange, value, elementProps, schemaType } = props;

  // Get the field to mirror from schema options, default to 'title'
  const sourceField = schemaType.options?.sourceField || "title";
  const sourceValue = useFormValue([sourceField]);

  useEffect(() => {
    if (sourceValue && value !== sourceValue) {
      onChange(set(sourceValue));
    } else if (!sourceValue && value) {
      onChange(unset());
    }
  }, [sourceValue, value, onChange]);

  return (
    <div>
      <label htmlFor={elementProps.id}>{schemaType.title}</label>
      {schemaType.description && <p>{schemaType.description}</p>}
      <TextInput
        {...elementProps}
        value={value || ""}
        readOnly={true}
        placeholder={`Automatically populated from "${sourceField}"`}
      />
    </div>
  );
};
