# SEO/GEO Radar

**Live-Website:** [https://7amdmad.github.io/seo-geo-radar/](https://7amdmad.github.io/seo-geo-radar/)

SEO/GEO Radar ist ein deutschsprachiger, zweiwöchentlicher Überblick zu SEO, GEO, KI-Suche und digitalem Marketing. Jede Ausgabe fasst ausgewählte Entwicklungen verständlich zusammen und verlinkt auf die Originalquellen.

## Website und Ausgaben

Besucher benötigen keine Installation und kein Konto, um die statische Website zu lesen. Die Startseite zeigt die aktuelle Ausgabe und ein nach Monaten sortiertes Archiv. Jede Ausgabe liegt in einem eigenen, direkt verlinkbaren Ordner.

## Lokal starten

Zum Lesen ist keine Installation nötig. Öffne `index.html` direkt oder verwende die Vorschau-Funktion deines Editors. Das Projekt benötigt weder Build noch Paketmanager.

Für die Tests wird Node.js 22 oder neuer benötigt:

```sh
node --test
```

## Wiederverwendbarer Recherche-Prompt

Der Team-Prompt liegt in [new-deck.prompt.md](.github/prompts/new-deck.prompt.md). Im Abschnitt **Team Settings** lassen sich Themen, Fragen, Websites, Zeitraum, Zielgruppe und Folienzahl bearbeiten. Keine vertraulichen Angaben eintragen: Dieses Repository ist öffentlich.

1. Bearbeite die Einstellungen im Prompt. `PREFER` priorisiert die angegebenen Websites; `ONLY` beschränkt die Belege auf diese Websites. Standardmäßig werden die letzten 14 abgeschlossenen Kalendertage in `Europe/Vienna` recherchiert.
2. Öffne den Repository-Ordner `seo-geo-radar` als Workspace in VS Code und starte `/new-deck` in Copilot Chat. Alternativ öffne die Prompt-Datei und nutze **Run Prompt**, oder füge sie einem Chat als Anhang hinzu und bitte um Ausführung mit diesen Einstellungen.
3. Prüfe die Kandidaten im Chat und gib Auswahl und Deck-Erstellung ausdrücklich frei. Ein Prompt-Aufruf allein erstellt oder veröffentlicht noch keine Ausgabe.

Der Prompt wird manuell gestartet; es gibt keine automatische Recherche. Die Ausgabe bleibt standardmäßig deutsch. Der bestehende Deck-Inhalt wird durch das Bearbeiten der Prompt-Datei nicht verändert.

## Eine Ausgabe ergänzen

1. Starte die Recherche mit dem wiederverwendbaren Team-Prompt und den gewünschten Einstellungen. Das ist ein manueller Schritt; im Projekt läuft kein KI-Agent automatisch.
2. Bitte den Agenten, die Vorgaben aus `AGENTS.md` zu befolgen und einen Kandidatenentwurf mit überprüfbaren Quellen zu erstellen.
3. Lege für eine freigegebene Ausgabe einen neuen Ordner `editions/YYYY-MM-DD/` an und erstelle darin `index.html`. Kopiere die neueste Ausgabe als Vorlage, nicht eine ältere.
4. Ergänze zehn Highlights mit zwei bis drei Sätzen, Quellenlinks, zwei bis vier hervorgehobenen Aussagen und jeweils einem Artikelbild mit sichtbarem Bildnachweis. Berichtszeitraum und Recherchestand stehen auf Deck-Ebene.
5. Ergänze den Link und die Archivzeile in `index.html` und prüfe jede Aussage gegen die verlinkte Quelle.
6. Führe die HTML- und Inhaltsprüfungen aus dem Abschnitt **Prüfen** aus.

Es gibt keinen Build-Prozess, der Inhalte generiert oder veröffentlicht. Unveröffentlichte Entwürfe gehören nicht in dieses öffentliche Repository; ein späterer privater Review-Prozess benötigt getrennte private Speicherung.

## Recherche und Bilder

Quellen müssen relevant und direkt erreichbar sein. Primärquellen haben Vorrang; Einschränkungen oder Unsicherheiten werden in der redaktionellen Prüfung festgehalten. Automatisierte Prüfungen können die Wahrheit externer Aussagen und die Erreichbarkeit fremder Server nicht zuverlässig bestätigen.

Die Folien verwenden wie Niksas Digest direkt eingebundene, extern gehostete Bilder aus den verlinkten Artikeln oder Dokumentationsseiten. Jede Folie zeigt ein Bild mit Alternativtext, Lazy Loading und einer sichtbaren Bildunterschrift: direkter Bildlink, Host, angegebener Urheber und ein separater Link zur Bildquellenseite. Die Bild-URLs werden aus den Seiten übernommen, nicht erfunden, und vor Veröffentlichung geprüft. Allgemeine Dokumentationsgrafiken werden ausdrücklich als solche gekennzeichnet.

Eine Quellenangabe oder ein Hotlink allein begründet keine Wiederverwendungserlaubnis. Die Rechte bleiben bei den jeweiligen Inhabern; bekannte Lizenzangaben und Einschränkungen werden beibehalten. Die GEO-Studienfolie nennt zusätzlich die dokumentierte CC-BY-4.0-Lizenz. Das bereitgestellte Drei-Logo und die Schriftdateien sind nicht in die statischen Seiten eingebunden.

## Projektstruktur

```text
index.html                  Startseite und Archiv
editions/YYYY-MM-DD/        Eine statische HTML-Seite je Ausgabe
src/styles.css              Gemeinsame Styles
src/deck.js                 Gemeinsame Foliennavigation
tests/                      Prüfungen der statischen Inhalte
.github/workflows/          Prüfungen und manuelle Pages-Bereitstellung
```

Die committed HTML-, CSS- und JavaScript-Dateien sind bereits die Website. Es gibt keinen Datenbankserver, kein Framework und keinen Laufzeitdienst.

## Prüfen

Die Prüfungen folgen Niksas Ablauf: HTML-Regeln und Formatierung mit djlint 1.46.1 sowie Inhaltsprüfungen für alle Ausgaben. Für lokale HTML-Prüfungen wird zusätzlich zu Node.js Python benötigt; für Besucher bleibt die Website vollständig statisch.

```sh
python -m pip install djlint==1.46.1
python -m djlint index.html editions
python -m djlint --check index.html editions
node --test
```

Eine Formatierung lässt sich mit `python -m djlint --reformat index.html editions` korrigieren. Danach die Prüfungen erneut ausführen. Die Inhaltsprüfung kontrolliert unter anderem zehn Folien, Bilder mit Bildnachweis, Quellenlinks, zwei bis drei Sätze und zwei bis vier Hervorhebungen je Folie. Sie prüft nicht die Wahrheit externer Aussagen.

Pull Requests werden automatisch geprüft. Ein Push auf `main` startet den Pages-Workflow: Er führt zuerst denselben Prüfworkflow aus und veröffentlicht den Repository-Root nur bei Erfolg. Bei fehlgeschlagenen Prüfungen bleibt die bisherige Website unverändert. Ein manueller Workflow-Start bleibt möglich. GitHub Pages ist für **GitHub Actions** eingerichtet.

## Roadmap

- **Phase 1:** öffentliche statische Website, Archiv, Foliennavigation und erste recherchierte Ausgabe.
- **Phase 2:** biwöchentliche Recherche und Kandidatenerstellung als unveröffentlichter Entwurf; kein direktes Publizieren.
- **Phase 3:** geschützter Review-Bereich für Auswahl, Bearbeitung und Freigabe.
- **Phase 4:** Veröffentlichung erst nach ausdrücklicher menschlicher Freigabe.

Automatisierte Recherche, Authentifizierung und Veröffentlichung sind nicht Teil von Phase 1.

## Mitwirken

Siehe [CONTRIBUTING.md](CONTRIBUTING.md). Änderungen an deutschen Inhalten brauchen überprüfbare Quellen und eine dokumentierte Rechteklärung für Bilder.

## Rechte und Lizenz

Der Quellcode steht unter der MIT-Lizenz in [LICENSE](LICENSE). Eigene redaktionelle Zusammenfassungen sind davon ausgenommen und bleiben vorbehalten. Verlinkte Artikel, Zitate, Logos, Schriftarten und Bilder behalten ihre jeweiligen Rechte und Lizenzbedingungen. Die MIT-Lizenz ist keine Erlaubnis zur Wiederverwendung dieser Inhalte.

## Veröffentlichung

Die Website ist live unter [https://7amdmad.github.io/seo-geo-radar/](https://7amdmad.github.io/seo-geo-radar/). Nach ausdrücklicher Freigabe werden Änderungen committed und auf `main` gepusht. Dieser Push veröffentlicht die Änderung automatisch, sobald alle Prüfungen erfolgreich sind. Ohne Freigabe wird nicht gepusht; das Bearbeiten lokaler Dateien allein veröffentlicht nichts.
