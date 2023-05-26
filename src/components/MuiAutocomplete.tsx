import React from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event, newValue: string | Skill | null) => {
          if (typeof newValue === "string") {
            setSkill({ id: Math.random(), label: newValue }); // you might want to find a better way of generating id
          } else if (newValue === null) {
            setSkill(null);
          } else {
            setSkill(newValue);
          }
        }}
        freeSolo
      />
    </Stack>
  );
};
