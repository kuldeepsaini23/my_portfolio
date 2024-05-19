import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import hero from "./schemaTypes/hero";
import approach from "./schemaTypes/approach";
import footer from "./schemaTypes/footer";
import icon from "./schemaTypes/icon";
import project from "./schemaTypes/project";
import testimonial from "./schemaTypes/testimonial";
import workExperience from "./schemaTypes/workExperience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    icon,
    project,
    testimonial,
    workExperience,
    approach,
    footer,
    post,
    author,
    category,
    blockContent,
  ],
};
