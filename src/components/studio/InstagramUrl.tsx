import React, { useEffect } from "react";
import { useFormValue, set, unset } from "sanity";
import { TextInput } from "@sanity/ui";

export const InstagramUrl = (props: {
  onChange: any;
  value?: string;
  elementProps: any;
  schemaType: any;
}) => {
  const { onChange, value, elementProps, schemaType } = props;

  // Get the field to mirror from schema options, default to 'handle'
  const sourceField = schemaType.options?.sourceField || "handle";
  const sourceValue = useFormValue([sourceField]);

  // Compose the Instagram URL
  const instagramUrl = sourceValue
    ? `https://instagram.com/${sourceValue}`
    : "";

  useEffect(() => {
    // If the source field has a value and the target field is different, set it
    if (sourceValue && value !== instagramUrl) {
      onChange(set(instagramUrl));
    } else if (!sourceValue && value) {
      // If the source is empty but the target has a value, unset it
      onChange(unset());
    }
  }, [sourceValue, value, onChange, instagramUrl]);

  return (
    <div>
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
