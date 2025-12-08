import React, { useEffect } from "react";
import { useFormValue, set, unset } from "sanity";
import { TextInput } from "@sanity/ui";

export const FacebookUrl = (props: {
  onChange: any;
  value?: string;
  elementProps: any;
  schemaType: any;
}) => {
  const { onChange, value, elementProps, schemaType } = props;

  // Get the field to mirror from schema options, default to 'handle'
  const sourceField = schemaType.options?.sourceField || "handle";
  const sourceValue = useFormValue([sourceField]);

  // Replace spaces with "-" in the handle
  const sanitizedHandle = sourceValue
    ? String(sourceValue).replace(/\s+/g, "-")
    : "";

  // Compose the Facebook URL
  const facebookUrl = sanitizedHandle
    ? `https://facebook.com/${sanitizedHandle}`
    : "";

  useEffect(() => {
    if (sanitizedHandle && value !== facebookUrl) {
      onChange(set(facebookUrl));
    } else if (!sanitizedHandle && value) {
      onChange(unset());
    }
  }, [sanitizedHandle, value, onChange, facebookUrl]);

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
