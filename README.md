# SEO/GEO Radar

**Die Website ist noch nicht veröffentlicht.** Die GitHub-Pages-Bereitstellung ist vorbereitet und wird manuell gestartet.

SEO/GEO Radar ist ein deutschsprachiger, zweiwöchentlicher Überblick zu SEO, GEO, KI-Suche und digitalem Marketing. Jede Ausgabe fasst ausgewählte Entwicklungen verständlich zusammen und verlinkt auf die Originalquellen.

## Website und Ausgaben

Besucher benötigen keine Installation und kein Konto, um die statische Website zu lesen. Die Startseite zeigt die aktuelle Ausgabe und ein nach Monaten sortiertes Archiv. Jede Ausgabe liegt in einem eigenen, direkt verlinkbaren Ordner.

## Lokal starten

Zum Lesen ist keine Installation nötig. Öffne `index.html` direkt oder verwende die Vorschau-Funktion deines Editors. Das Projekt benötigt weder Build noch Paketmanager.

Für die Tests wird Node.js 22 oder neuer benötigt:

```sh
node --test
```

## Eine Ausgabe ergänzen

1. Recherchiere den vorangegangenen 14-Tage-Zeitraum mit Copilot Chat oder einem anderen Recherchewerkzeug. Das ist ein manueller Schritt; im Projekt läuft kein KI-Agent automatisch.
2. Bitte den Agenten, die Vorgaben aus `AGENTS.md` zu befolgen und einen Kandidatenentwurf mit überprüfbaren Quellen zu erstellen.
3. Lege für eine freigegebene Ausgabe einen neuen Ordner `editions/YYYY-MM-DD/` an und erstelle darin `index.html`. Kopiere die neueste Ausgabe als Vorlage, nicht eine ältere.
4. Ergänze ein bis zehn Highlights mit Meldungsdatum, zwei bis drei Sätzen, Quellenlinks und Bildrechten oder CSS-Platzhaltern.
5. Ergänze den Link und die Archivzeile in `index.html` und prüfe jede Aussage gegen die verlinkte Quelle.
6. Führe `node --test` aus.

Es gibt keinen Build-Prozess, der Inhalte generiert oder veröffentlicht. Unveröffentlichte Entwürfe gehören nicht in dieses öffentliche Repository; ein späterer privater Review-Prozess benötigt getrennte private Speicherung.

## Recherche und Bilder

Quellen müssen relevant und direkt erreichbar sein. Primärquellen haben Vorrang; Einschränkungen oder Unsicherheiten werden in der redaktionellen Prüfung festgehalten. Automatisierte Prüfungen können die Wahrheit externer Aussagen und die Erreichbarkeit fremder Server nicht zuverlässig bestätigen.

Es werden keine Artikelbilder ohne bestätigte Wiederverwendungsrechte übernommen. Bis eine passende Lizenz oder Erlaubnis dokumentiert ist, verwendet die Folienansicht eigene CSS-Platzhalter. Das bereitgestellte Drei-Logo und die Schriftdateien sind nicht in die statischen Seiten eingebunden.

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

```sh
node --test
```

GitHub Actions führt die Tests bei Änderungen aus. Der Pages-Workflow ist ausschließlich manuell startbar und veröffentlicht den Repository-Root. In den Repository-Einstellungen muss GitHub Pages als Quelle **GitHub Actions** verwenden.

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

Die Website ist derzeit **nicht live**. Nach Einrichtung von GitHub Pages kann der manuelle Workflow `Deploy GitHub Pages` gestartet werden. Erst nach erfolgreichem Workflow und Prüfung der öffentlichen URL darf diese im README als Live-Website verlinkt werden.
