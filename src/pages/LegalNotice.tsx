import { ControllerDetails, LegalPage, LegalSection } from '../components/legal/LegalPage';

export default function LegalNotice() {
  return (
    <LegalPage title="Impressum">
      <LegalSection title="Angaben gemäß § 5 DDG">
        <ControllerDetails />
      </LegalSection>
      <LegalSection title="Über dieses Portfolio">
        <p>
          Dieses persönliche berufliche Portfolio dient der Vorstellung meiner Qualifikationen
          und meiner Projekte in Softwareentwicklung, Integration sowie UX/UI- und Produktdesign.
          Es wird für Bewerbungen und zur beruflichen Kontaktaufnahme genutzt.
        </p>
      </LegalSection>
      <p className="text-xs">
        Gesetzliche Grundlage: <a href="https://www.gesetze-im-internet.de/ddg/__5.html">§ 5 Digitale-Dienste-Gesetz (DDG)</a>
      </p>
    </LegalPage>
  );
}
