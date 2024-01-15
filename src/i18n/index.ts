import spanish from "./es.json";
import catalan from "./ca.json";

const LANGUAGES = {
  SPANISH: "es",
  CATALAN: "ca",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  if (currentLocale === LANGUAGES.CATALAN) return catalan;
  return spanish;
};
