import { useTranslations } from "next-intl";

function TheHeader() {
  const t = useTranslations("Home");
  return (
    <main>
      <p>{t("title")}</p>
    </main>
  );
}
export default TheHeader;
