import type { LoadContext, OptionValidationContext, Plugin } from "@docusaurus/types";
type MyOptions = {
    indexDocs: boolean;
    indexDocSidebarParentCategories: number;
    indexBlog: boolean;
    indexPages: boolean;
    language: string | string[];
    style?: "none";
    maxSearchResults: number;
    lunr: {
        tokenizerSeparator?: string;
        k1: number;
        b: number;
        titleBoost: number;
        contentBoost: number;
        tagsBoost: number;
        parentCategoriesBoost: number;
    };
};
export default function anmodeDocusaurusSearchLocal(context: LoadContext, options: MyOptions): Plugin<unknown>;
export declare function validateOptions({ options, validate, }: OptionValidationContext<MyOptions, MyOptions>): MyOptions;
export {};
