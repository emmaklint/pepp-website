import React from "react";

import Page from "../components/Page";
import P from "../components/Typography/P";
import PageHeader from "../components/Typography/PageHeader";
import Meta from "../components/Typography/Meta";
import BigQuote from "../components/Typography/BigQuote";
import Text from "../components/Typography/Text";

const About = () => (
  <Page>
    <Text>
      <PageHeader>Bakgrund</PageHeader>
      <P>
        Pepp grundades i Stockholm i 2013 av Edit Wallin som då studerade
        industriell ekonomi på KTH. Edits väg in till KTH var aldrig självklar
        och gick slumpmässigt via ett tekniskt basår där hon för första gången
        fick upp ögonen för hur kul skolan kunde vara utöver det sociala. Edit
        visste egentligen väldigt lite om vad det innebar att vara ingenjör och
        att plugga hade tidigare inte riktigt känts som hennes grej, så att hon
        hamnade på KTH anser hon själv vara tack vare slumpen.
      </P>
      <P>
        Studietiden var full av överraskningar och där bland förvånades Edit
        över den relativt homogena gruppen och att så många av hennes
        studiekamrater som sedan länge vetat att de skall studera till ingenjör.
        Många av dem hade föräldrar (oftast en pappa) som själv var ingenjör.
        Lyrisk över den nya världen som studierna innebar kände Edit att hon
        ville dela med sig och berätta om hur kul det kan vara att studera
        teknik.
      </P>
      <P>
        Trots att det tjejer utgör hälften av alla som studerar naturkunskap på
        gymnasiet (och där med är behöriga att läsa på exempelvis KTH) är det
        ändå en minoritet av dessa som väjer tekniska studier. Googlar man ordet
        ingenjör är det till största del bilder på vita män med bygghjälm. Då
        Edit inte kände igen sig i detta grundade hon Pepp för att skapa nya
        förebilder och bredda synen på hur kul tekniska studier kan vara!
      </P>
      <BigQuote>
        ”Pepp skapar nya förebilder och breddar synen på teknik.”
      </BigQuote>
      <PageHeader>Vision</PageHeader>
      <P>
        Pepp vill ge utrymme åt kvinnliga förebilder inom teknik- och
        ingenjörsvärlden för att väcka intresse, utmana fördomar och visa de
        oändliga möjligheter som branschen har att erbjuda. Genom att samla
        gymnasietjejer*, studenter och näringsliv vill Pepp skapa sammanhang där
        tankar och erfarenheter utbyts, samtidigt som mångfalden ökar.
      </P>

      <P>
        Under ett 6 månader långt mentorsprogram får gymnasietjejer* en
        ingenjörsstuderande tjej* som sin egen mentor, möjlighet att gå på
        inspirerande event hos företag från ingenjörsbranschen och ett tillfälle
        att lära känna andra tjejer som också är nyfikna på att veta mer om
        teknik och vad ingenjörer faktiskt gör.
      </P>
      <P>
        Pepp mäter inte framgång i antal adepter som efter mentorskapsprogrammet
        studerar eller arbetar med teknik, utan fokus ligger på att adepten
        efter avslutat mentorskapsprogram ska fått möjligheten ta ett aktivt val
        när denne väljer yrkesbana. Att adepten då väljer teknik är inte
        självändamålet – målet är att adepten ska ha vetskapen om vad denne
        väljer bort.
      </P>
      <BigQuote>
        Pepp utmanar bilden av vem som kan studera eller jobba med teknik
      </BigQuote>
      <Meta>
        * Teknik är enligt Pepp den gemensamma nämnaren för studier eller yrken
        där teknik står i centrum. Exempel på sådana kan vara, men är inte
        begränsade till, ingenjörer, programmerare, produktutvecklare,
        teknikchef, kemist, UX designer och ljudtekniker.
      </Meta>
    </Text>
  </Page>
);

export default About;
