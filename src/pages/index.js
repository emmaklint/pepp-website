import React from "react";

import Page from "../components/Page";
import P from "../components/Typography/P";

const IndexPage = () => (
  <Page>
    <h1>Hej, vi är Pepp!</h1>
    <P>
      Pepp är ett mentorsskapsprogram där du som tjej* får en mentor från
      universitetet som hjälper dig upptäcka de oändliga möjligheterna
      teknikbranschen har att erbjuda. Det spelar ingen roll om du är helt
      oteknisk, väldigt teknikintresserad eller något däremellan. Pepp är för
      alla oavsett bakgrund eller intressen!
    </P>
    <P>
      Sedan starten 2013 har över 800 gymnasietjejer och ingenjörsstudenter
      deltagit i Pepp som adepter, mentorer eller i någon av våra
      projektgrupper.
    </P>
  </Page>
);

export default IndexPage;
