import React from "react";
import Page from "../components/Page";
import Text from "../components/Typography/Text";
import { P, H1 } from "../components/Typography";
import Link from "gatsby-link";
import styled from "styled-components";

const TextLink = styled(Link)`
transition: background-size .4s ease;
background: linear-gradient(to bottom, transparent 62%, ##fecc02fecc02 0) center center/0% 75% no-repeat;
text-decoration: underline;
cursor: pointer;
&:hover {
  background-size: 100% 100%;
}
&:active {
    color: black;
  background-size: 80% 100%;
}
&:visited {
    color: inherit;
}

  }
`;

const Adept = () => (
  <Page>
    <Text>
      <H1>Adept</H1>
      <P>
        “Vad gör en ingenjör?” är du troligtvis inte ensam om att ha funderat
        över. Att svaret inte går att förklara i en mening beror på att en
        ingenjör kan vara så många olika saker, men en sak är säker – ingenjören
        jobbar med att lösa morgondagens problem! Ingenjörens bidrag till
        samhället finns överallt i vår vardag; från cykeln du tar dig till
        skolan på till hur du använder den här hemsidan! Ingenjörer har därför
        en nyckelroll att se till att framtidens teknik hjälper oss människor
        att leva på ett hållbart sätt.
      </P>
      <P>
        Pepp finns för att du som gymnasietjej* ska få veta mer om vilka
        otroligt häftiga, spännande och roliga saker ingenjörsyrket kan
        innebära! Som adept i Pepp får du en ingenjörsstuderande tjej* som din
        egen mentor, möjlighet att gå på inspirerande event hos företag i
        ingenjörsbranschen och ett tillfälle att lära känna andra tjejer som
        också är nyfikna på att veta mer om teknik och ingenjörens roll.
      </P>
      <P>
        När du går på gymnasiet har du möjlighet att gå med i Pepp
        mentorsprogram under vårterminen. Just nu är anmälan öppen för
        mentorsprogrammen 2019.
      </P>
      <P>
        Om du har några frågor eller funderingar är du välkommen att{" "}
        <TextLink to="kontakt">kontakta oss.</TextLink>
      </P>
    </Text>
  </Page>
);

export default Adept;
