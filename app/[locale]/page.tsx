import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('app');

  return (
    <div>
      <Typography>{t('title')} - {t('description')}</Typography>
      <Button variant="contained">Entrar</Button>
    </div>
  );
}
