import React from "react";

import Page from "../components/Page";
import PageHeader from "../components/Typography/PageHeader";

import Text from "../components/Typography/Text";
import P from "../components/Typography/P";

const Security = () => (
  <Page>
    <Text>
      <PageHeader>Dataskyddspolicy</PageHeader>
      <P>
        Vi på Pepp lägger stor vikt vid att värna om våra medlemmars integritet
        och är därför noggranna med att skydda dina personuppgifter. För oss är
        det viktigt att du ska kunna känna dig trygg med hur vi hanterar dina
        personuppgifter och vi är därför öppna med hur vi samlar in och
        behandlar dina uppgifter.
      </P>
      <P>
        Genom att acceptera denna personuppgiftspolicy samtycker du till att
        dina personuppgifter behandlas i enlighet med denna
        personuppgiftspolicy. Pepp behandlar dina personuppgifter för att kunna
        hantera din förfrågan/intresseanmälan.
      </P>
      <P>
        Personuppgifterna används för att kunna kontakta dig, samt kommunicera
        information till dig. Personuppgifterna är endast tillgängliga för ett
        begränsat antal av Pepp:s ideella medarbetare, och lämpliga tekniska
        säkerhetsåtgärder är vidtagna för att säkerställa att personuppgifterna
        är trygga. Pepp använder underleverantörer av system där dina
        personuppgifterna hanteras. Vissa av underleverantörerna är delvis
        lokaliserade utanför EU, men vi använder endast underleverantörer som
        arbetar i enlighet med GDPR.
      </P>
      <P>
        Dina personuppgifter kommer aldrig att delas vidare till tredje part. Om
        du inte har visat intresse för informationen vi skickat till dig inom 18
        månader kommer alla dina personuppgifter att raderas ur våra system.
      </P>
      <P>
        Har du frågor utöver informationen som finns i denna policy kan du
        kontakta oss på{" "}
        <a href="mailto:dataskydd@blipepp.nu">dataskydd@blipepp.nu</a>.
      </P>
      <P>
        Om du önskar bli borttagen ur Pepp:s system, eller vill veta vilken
        information som finns lagrad om dig, vänligen skicka ett mail till{" "}
        <a href="mailto:dataskydd@blipepp.nu">dataskydd@blipepp.nu</a>.
      </P>
    </Text>
  </Page>
);

export default Security;
