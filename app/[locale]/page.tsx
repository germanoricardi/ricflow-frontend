'use client';

import { LoginForm } from "@/sections/auth/login-form";

export default function Home() {
  // const t = useTranslations('app');

  return (
    <LoginForm />
    /*
    <Stack direction={'column'} spacing={2}>
      <Card>
        <Typography>{t('title')} - {t('description')}</Typography>        
      </Card>
      <Card>
        <Button variant="contained">Entrar</Button>
      </Card>
    </Stack>
    */
  );
}
