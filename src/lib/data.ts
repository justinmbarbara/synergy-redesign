// Central place to read the editable YAML data files in /data.
// Every component imports from here so a rename only has to happen once.
import siteData from "../../data/site.yml";
import navigationData from "../../data/navigation.yml";
import footerData from "../../data/footer.yml";
import tombstoneData from "../../data/tombstones.yml";
import caseStudyData from "../../data/case-studies.yml";
import teamData from "../../data/team.yml";
import filterData from "../../data/transaction-filters.yml";

export const site = siteData as any;
export const navigation = navigationData as any;
export const footer = footerData as any;
export const tombstones = (tombstoneData as any).tombstones ?? [];
export const caseStudies = (caseStudyData as any).case_studies ?? [];
export const team = (teamData as any).members ?? [];
export const transactionFilters = filterData as any;
