import { ControllerDetails, LegalPage, LegalSection } from '../components/legal/LegalPage';

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>Stand: 17. Oktober 2026. Diese Hinweise erläutern die Verarbeitung personenbezogener Daten beim Besuch dieses Portfolios und bei einer Kontaktaufnahme.</p>

      <LegalSection title="1. Verantwortlicher">
        <ControllerDetails />
        <p>Für Datenschutzanfragen und die Ausübung Ihrer Rechte können Sie mich unter der genannten E-Mail-Adresse erreichen.</p>
      </LegalSection>

      <LegalSection title="2. Bereitstellung und Sicherheit der Website">
        <p>
          Die Website wird bei Vercel Inc., USA, gehostet und über dessen weltweites
          Auslieferungsnetz bereitgestellt. Beim Abruf von Seiten, Bildern, Videos, Schriftarten
          oder Lebensläufen werden technisch erforderliche Verbindungsdaten verarbeitet.
          Dazu gehören insbesondere IP-Adresse, Zeitpunkt, angeforderte Adresse, HTTP-Status
          sowie vom Browser übermittelte Angaben zu Browser und Betriebssystem und gegebenenfalls
          die verweisende Seite (Referrer).
        </p>
        <p>
          Diese Daten dienen der Auslieferung der Inhalte, der Fehleranalyse, der Abwehr
          missbräuchlicher Zugriffe und dem sicheren Betrieb. Dabei können auf der
          Hosting-Infrastruktur serverseitige Zugriffs-, Fehler- und Sicherheitsprotokolle
          entstehen. Die Portfolio-Anwendung führt keine eigene Besucherdatenbank.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt
          darin, mein berufliches Portfolio zuverlässig und sicher bereitzustellen.
          Die Übermittlung der Verbindungsdaten ist für einen Seitenabruf technisch erforderlich;
          ohne diese Daten kann die Website nicht ausgeliefert werden.
        </p>
        <p>
          Empfänger sind Vercel und die zur Bereitstellung, zum Netzbetrieb und zur Absicherung
          eingesetzten Infrastruktur- und Unterdienstleister. Angaben zu Vercels Verarbeitung
          finden Sie in dessen <a href="https://vercel.com/legal/privacy-notice">Datenschutzhinweisen</a> und
          im <a href="https://vercel.com/legal/dpa">Data Processing Addendum</a>.
        </p>
      </LegalSection>

      <LegalSection title="3. Schriftarten, Medien und Speicherzugriffe">
        <p>
          Die Schriftart Inter sowie die Bilder, Projektvideos und PDF-Lebensläufe werden
          zusammen mit dieser Website ausgeliefert. Zum Laden der Schriftart wird keine
          Verbindung zu Google Fonts aufgebaut. Es sind keine Videos, Karten oder Social-Media-Widgets
          anderer Plattformen eingebettet.
        </p>
        <p>
          Die Portfolio-Anwendung setzt keine Cookies und nutzt weder Local Storage noch
          Session Storage zur Speicherung von Besucherdaten. Es sind keine Analyse-, Werbe-
          oder Tracking-Skripte eingebunden. Die für die Darstellung geladenen Dateien können
          vom Browser im üblichen Cache zwischengespeichert werden.
        </p>
        <p>
          Der E-Mail-Kopierknopf schreibt erst nach Betätigung die öffentliche Kontaktadresse
          in Ihre Zwischenablage. Die Anwendung liest den bisherigen Inhalt Ihrer Zwischenablage
          nicht aus. Die Kopierfunktion dient der von Ihnen angeforderten Kontaktvorbereitung.
        </p>
      </LegalSection>

      <LegalSection title="4. Kontakt per E-Mail">
        <p>
          Wenn Sie mir schreiben, verarbeite ich Ihre Absenderadresse, gegebenenfalls Ihren
          Namen sowie den Inhalt, die Anhänge und die technischen Metadaten Ihrer Nachricht,
          um Ihre Anfrage zu bearbeiten und zu beantworten. Die Kontaktadresse wird über
          Gmail von Google bereitgestellt. Google und die an der E-Mail-Zustellung beteiligten
          Anbieter verarbeiten die für Übermittlung, Speicherung und Sicherheit erforderlichen Daten.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO aufgrund meines Interesses an der
          Beantwortung beruflicher Anfragen. Soweit Ihre Anfrage der Anbahnung oder Durchführung
          eines Vertrags mit Ihnen dient, ist Art. 6 Abs. 1 lit. b DSGVO einschlägig.
          Sie entscheiden, welche Informationen Sie übermitteln; erforderlich sind lediglich
          die Angaben, die zur Beantwortung der jeweiligen Anfrage benötigt werden.
        </p>
        <p>
          Ein E-Mail-Link öffnet Ihr E-Mail-Programm. Über diese Website selbst wird kein
          Kontaktformular übermittelt. Hinweise von Google finden Sie in der
          {' '}<a href="https://policies.google.com/privacy?hl=de">Google-Datenschutzerklärung</a>.
        </p>
      </LegalSection>

      <LegalSection title="5. Verarbeitung außerhalb der EU und des EWR">
        <p>
          Vercel und Google nutzen internationale Infrastruktur. Deshalb kann insbesondere
          eine Verarbeitung in den USA und in weiteren Ländern außerhalb der EU und des EWR
          stattfinden. In solchen Ländern können andere Datenschutzvorschriften gelten;
          insbesondere können abweichende behördliche Zugriffsmöglichkeiten bestehen.
        </p>
        <p>
          Vercel beschreibt in seinem <a href="https://vercel.com/legal/dpa">Data Processing Addendum</a>
          {' '}Standardvertragsklauseln der EU-Kommission als Instrument für erfasste internationale
          Übermittlungen. Google erläutert die von ihm eingesetzten Übermittlungsmechanismen in seinen
          {' '}<a href="https://policies.google.com/privacy/frameworks?hl=de">Hinweisen zu internationalen Datenübermittlungen</a>.
          Welche Grundlage und Garantien im Einzelfall gelten, hängt vom jeweiligen Dienst
          und Übermittlungsvorgang ab. Auskünfte hierzu und gegebenenfalls eine Kopie der
          maßgeblichen Garantien können Sie über die oben genannte Kontaktadresse anfordern.
        </p>
      </LegalSection>

      <LegalSection title="6. Speicherdauer">
        <p>
          Verbindungs- und Protokolldaten werden nur so lange benötigt, wie dies für
          Auslieferung, Betrieb, Fehlerklärung oder die Untersuchung von Sicherheitsvorfällen
          erforderlich ist. Die Aufbewahrung auf der Hosting-Infrastruktur richtet sich
          nach den jeweils verwendeten Funktionen und deren Einstellungen. Maßgeblich sind
          die Protokollart sowie die erforderliche Dauer der Fehler- oder Sicherheitsanalyse.
        </p>
        <p>
          E-Mail-Anfragen werden aufbewahrt, solange dies zur Bearbeitung und einer erforderlichen
          Anschlusskommunikation nötig ist. Eine längere Speicherung kommt in Betracht,
          soweit eine konkret anwendbare gesetzliche Pflicht besteht oder die Daten zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich sind.
          Entfällt der jeweilige Zweck und besteht kein weiterer Aufbewahrungsgrund, werden
          die betreffenden Daten gelöscht.
        </p>
      </LegalSection>

      <LegalSection title="7. Externe Links">
        <p>
          Links etwa zu GitHub oder LinkedIn sind gewöhnliche Verweise. Erst wenn Sie einen
          solchen Link öffnen, rufen Sie den jeweiligen externen Dienst auf. Für dessen
          Datenverarbeitung gelten die Hinweise des jeweiligen Anbieters. Die verlinkten
          Dienste sind nicht als Widgets in dieses Portfolio eingebettet.
        </p>
      </LegalSection>

      <LegalSection title="8. Ihre Rechte">
        <p>
          Unter den jeweiligen gesetzlichen Voraussetzungen haben Sie das Recht auf Auskunft
          (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
          Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Eine gegebenenfalls
          erteilte Einwilligung können Sie mit Wirkung für die Zukunft widerrufen, ohne dass
          die Rechtmäßigkeit der vorherigen Verarbeitung berührt wird.
        </p>
        <p className="text-white">
          Widerspruchsrecht: Soweit Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          verarbeitet werden, können Sie nach Art. 21 DSGVO aus Gründen, die sich aus Ihrer
          besonderen Situation ergeben, jederzeit widersprechen. Ich verarbeite die
          betroffenen Daten dann nicht weiter, es sei denn, es bestehen nachweisbare
          zwingende schutzwürdige Gründe oder die Verarbeitung dient Rechtsansprüchen.
        </p>
        <p>
          Sie können sich nach Art. 77 DSGVO bei einer Datenschutzaufsichtsbehörde beschweren,
          insbesondere an Ihrem Aufenthaltsort, Ihrem Arbeitsplatz oder am Ort des vermuteten
          Verstoßes. Für meinen Wohnsitz ist der
          {' '}<a href="https://www.lfd.niedersachsen.de/beschwerde">Landesbeauftragte für den Datenschutz Niedersachsen</a>
          {' '}zuständig.
        </p>
        <p>Es findet durch diese Portfolio-Anwendung keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO statt.</p>
      </LegalSection>
    </LegalPage>
  );
}
