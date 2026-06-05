# Projektdokumentation - [Projekttitel]

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
    1. [Understand & Define](#31-understand--define)
    2. [Sketch](#32-sketch)
    3. [Decide](#33-decide)
    4. [Prototype](#34-prototype)
    5. [Validate](#35-validate)
4. [Erweiterungen [Optional]](#4-erweiterungen-optional)
5. [Projektorganisation [Optional]](#5-projektorganisation-optional)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang [Optional]](#7-anhang-optional)

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.

<!-- WICHTIG: DIE KAPITELSTRUKTUR DARF NICHT VERÄNDERT WERDEN! -->

<!-- Diese Vorlage ist für eine README.md im Repository gedacht. Abschnitte mit [Optional] können weggelassen werden, wenn in den Übungen nichts anderes verlangt wird. -->

## 1. Ausgangslage
Fussball gehört weltweit zu den beliebtesten Sportarten. Obwohl die grundlegenden Regeln vielen Menschen bekannt sind, entstehen während Spielen oder beim Verfolgen von Fussballübertragungen häufig Fragen zu bestimmten Spielsituationen. Insbesondere komplexere Regeln wie Abseits, Handspiel oder die Vorteilsregel führen oft zu Unsicherheiten und Diskussionen. Gleichzeitig sind offizielle Regelwerke meist umfangreich, schwer verständlich und für Einsteiger wenig benutzerfreundlich.

Aus diesem Grund entstand die Idee, eine Webanwendung zu entwickeln, welche Fussballregeln einfach, übersichtlich und verständlich erklärt. Die Anwendung soll sowohl für Fussballinteressierte als auch für Spielerinnen und Spieler, Trainer oder Zuschauer geeignet sein. Ziel ist es, Informationen schnell auffindbar zu machen und Regelverständnis durch verständliche Erklärungen und Beispiele zu fördern.

Die Anwendung wurde als Einzelprojekt im Rahmen des Moduls Prototyping entwickelt und unter folgender URL veröffentlicht:

https://fussballregeln.netlify.app


## 2. Lösungsidee
Die entwickelte Webanwendung „FussballRegeln“ bietet eine zentrale Plattform, auf der wichtige Fussballregeln verständlich erklärt werden. Anstatt lange Regelbücher durchsuchen zu müssen, können Benutzer direkt über Kategorien oder die Suchfunktion zu den gewünschten Informationen gelangen.

Die Anwendung umfasst verschiedene Bereiche:

  - Startseite mit Einführung in das Thema
  - Kategorienübersicht der Fussballregeln
  - Detailseiten zu einzelnen Regeln
  - Suchfunktion für schnelles Finden von Regeln
  - Fun-Facts-Bereich mit historischen und nicht mehr gültigen Fussballregeln
  - Login- und Registrierungsfunktion
  - MongoDB-Datenbank zur Verwaltung der Inhalte

Besonderer Wert wurde auf eine übersichtliche Navigation, ein modernes Design und eine einfache Bedienung gelegt. Durch die Kombination aus kurzen Erklärungen, Beispielen und Bildern sollen auch komplexere Regeln leicht verständlich vermittelt werden.

## 3. Vorgehen & Artefakte
Die Durchführung erfolgt phasenbasiert; dokumentieren Sie die wichtigsten Ergebnisse je Phase.

### 3.1 Understand & Define
Zu Beginn des Projekts wurde untersucht, welche Probleme bei bestehenden Informationsquellen zu Fussballregeln auftreten. Dabei zeigte sich, dass offizielle Regelwerke häufig sehr umfangreich und schwer verständlich formuliert sind. Für viele Nutzer ist es deshalb schwierig, schnell Antworten auf konkrete Fragen zu finden.

Als Zielgruppe wurden folgende Personen definiert:

- Fussballinteressierte Zuschauer
- Juniorenspieler und Amateurspieler
- Trainer und Betreuer
- Personen, die Fussballregeln besser verstehen möchten

Basierend auf dieser Analyse wurden folgende Anforderungen definiert:

### Funktionale Anforderungen
- Regeln müssen kategorisiert dargestellt werden
- Detailinformationen zu jeder Regel müssen abrufbar sein
- Suchfunktion für Regeln
- Login und Registrierung
- Verwaltung der Inhalte über MongoDB
### Nicht-funktionale Anforderungen
- Einfache Bedienbarkeit
- Übersichtliche Navigation
- Schnelle Ladezeiten
- Modernes und ansprechendes Design
- Responsives Layout

Aus diesen Anforderungen entstand die zentrale Fragestellung:

Wie kann eine Webanwendung entwickelt werden, welche Fussballregeln verständlich erklärt und gleichzeitig eine schnelle und intuitive Navigation ermöglicht?
### 3.2 Sketch
Nach der Definitionsphase wurden erste Ideen und Layouts skizziert. Ziel war es, eine möglichst einfache Struktur zu entwickeln, damit Nutzer ohne Einarbeitung die gewünschten Informationen finden können.

Die Navigation wurde bereits früh in folgende Hauptbereiche unterteilt:

- Home
- Regeln
- Fun Facts
- Suchen
- Login

Für die Regelübersicht wurde eine Kartenansicht gewählt, da diese Informationen übersichtlich präsentiert und gleichzeitig eine einfache Erweiterung ermöglicht.

Anschliessend wurden erste Wireframes in Figma erstellt. Die Figma-Skizzen dienten dazu, die grundlegende Seitenstruktur, Navigation und Benutzerführung zu visualisieren.

Die wichtigsten Seiten waren bereits in den frühen Entwürfen vorgesehen:

- Startseite
- Kategorienübersicht
- Regel-Detailseite
- Suchseite
- Login-Bereich

Die Skizzen bildeten die Grundlage für die anschliessende Umsetzung des Prototyps.

### 3.3 Decide
Basierend auf den erstellten Skizzen wurde die finale Struktur der Anwendung festgelegt.

Für die technische Umsetzung wurden folgende Technologien ausgewählt:

| Technologie        | Begründung                                                     |
| ------------------ | -------------------------------------------------------------- |
| SvelteKit          | Moderne Webentwicklung, hohe Performance und einfache Struktur |
| MongoDB Atlas      | Flexible Speicherung der Regeldaten                            |
| MongoDB Compass    | Einfache Verwaltung der Datenbank                              |
| GitHub             | Versionsverwaltung und Backup                                  |
| Netlify            | Einfache Veröffentlichung der Anwendung                        |
| Figma              | Erstellung von Wireframes und Layoutideen                      |
| Visual Studio Code | Entwicklungsumgebung                                           |

Für das Design wurde bewusst ein dunkles Erscheinungsbild mit Fussballstadion-Hintergrund gewählt. Dadurch entsteht ein direkter Bezug zum Thema Fussball und gleichzeitig ein modernes Erscheinungsbild.

Zusätzlich wurde entschieden, die Inhalte nicht ausschliesslich über lange Texte darzustellen. Stattdessen werden Regeln in einzelne Karten aufgeteilt und über mehrere Ebenen strukturiert:

1. Kategorienübersicht
2. Auswahl einer Regel
3. Detailansicht der Regel

Dadurch wird die Informationsmenge pro Seite reduziert und die Benutzerführung vereinfacht.

Neben den ursprünglich geplanten Funktionen wurde bereits früh entschieden, zusätzliche Features wie eine Suchfunktion, einen Fun-Facts-Bereich sowie Login und Registrierung zu integrieren, um den Mehrwert der Anwendung weiter zu erhöhen.

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)
Nach der Analyse der Anforderungen und der Erstellung erster Skizzen in Figma wurde das finale Design der Anwendung definiert. Ziel war es, eine moderne und übersichtliche Webanwendung zu entwickeln, welche Fussballregeln verständlich vermittelt und gleichzeitig einfach zu bedienen ist.

Bereits in den ersten Entwürfen wurde eine klare Navigationsstruktur festgelegt. Die Anwendung wurde in die Bereiche Home, Regeln, Fun Facts, Suchen und Login unterteilt. Dadurch sollen Nutzer die gewünschten Informationen möglichst schnell finden können.

Für die Darstellung der Inhalte wurde ein kartenbasiertes Layout gewählt. Die Regeln werden zunächst nach Kategorien dargestellt und anschliessend auf einzelnen Detailseiten erklärt. Dadurch wird die Informationsmenge pro Seite reduziert und die Übersichtlichkeit verbessert.

Während der Entwicklung wurde das Design mehrfach überarbeitet. Die erste Version verwendete einen einfachen hellen Hintergrund. Im Rahmen der Evaluation wurde jedoch festgestellt, dass dieser wenig Bezug zum Thema Fussball herstellt und insgesamt eher schlicht wirkt. Aus diesem Grund wurde das Design angepasst.

Die finale Version verwendet ein Stadionbild als Hintergrund sowie ein dunkles Farbschema mit transparenten Karten (Glassmorphism-Effekt). Grüne Buttons dienen als visuelle Hervorhebung wichtiger Aktionen und sorgen für eine einheitliche Benutzerführung. Durch diese Gestaltung entsteht ein moderner und thematisch passender Gesamteindruck.

Zusätzlich wurde darauf geachtet, dass sämtliche Seiten ein einheitliches Erscheinungsbild besitzen. Die Regelübersicht, Kategorienseiten, Detailseiten, Suchfunktion sowie Login- und Registrierungsbereich verwenden dieselben Farben, Kartenlayouts und Navigationselemente.

#### 3.4.2. Umsetzung (Technik)
Die technische Umsetzung erfolgte mit SvelteKit und Visual Studio Code. Als Datenbank wurde MongoDB Atlas verwendet. Die Daten wurden über MongoDB Compass verwaltet und gepflegt.

Die Anwendung basiert auf einer mehrstufigen Struktur. Auf der ersten Ebene befindet sich die Kategorienübersicht. Anschliessend können Benutzer eine Kategorie auswählen und gelangen zu den darin enthaltenen Regeln. Jede Regel besitzt wiederum eine eigene Detailseite mit Erklärung, Beispiel und Bild.

Für die Speicherung der Inhalte wurden mehrere MongoDB Collections verwendet:

- rules (Fussballregeln)
- funfacts (historische und nicht mehr gültige Regeln)
- users (Benutzerkonten)

Die Regeldaten werden dynamisch aus der Datenbank geladen. Dadurch können neue Inhalte jederzeit ergänzt werden, ohne dass Änderungen am Programmcode notwendig sind.

Im Verlauf der Entwicklung wurden mehrere Funktionen implementiert:

- Kategorienübersicht
- Detailseiten für Regeln
- Fun-Facts-Bereich
- Suchfunktion
- Login
- Registrierung
- Benutzerverwaltung über MongoDB

Die Suchfunktion ermöglicht das schnelle Auffinden von Regeln anhand von Suchbegriffen. Die Login- und Registrierungsfunktion speichert Benutzerdaten in der MongoDB-Collection „users“.

Für die Veröffentlichung wurde Netlify verwendet. Während des Deployments traten verschiedene technische Herausforderungen auf, unter anderem Probleme mit Environment Variables, der MongoDB-Verbindung sowie dynamischen Routen. Diese konnten durch systematisches Debugging behoben werden.

Die fertige Anwendung wurde erfolgreich veröffentlicht und ist unter folgender Adresse erreichbar:

https://fussballregeln.netlify.app

Durch die Verwendung von SvelteKit, MongoDB und Netlify entstand eine moderne Webanwendung, welche dynamische Inhalte verwalten und dem Benutzer übersichtlich präsentieren kann.

### 3.5 Validate
Nach der Fertigstellung eines funktionsfähigen Prototyps wurde eine Usability-Evaluation durchgeführt. Ziel war es, die Benutzerfreundlichkeit der Anwendung zu überprüfen und mögliche Schwachstellen zu identifizieren.

Die Evaluation wurde mit zwei Mitstudenten durchgeführt.

### Testaufgaben

Den Testpersonen wurden folgende Aufgaben gestellt:

### Aufgabe 1

Finde die Regel „Offside“ und lies die Erklärung durch.

### Aufgabe 2

Finde den Login-Bereich und versuche, ein Benutzerkonto zu erstellen.

### Beobachtungen

Während der Durchführung wurden die Nutzer beobachtet. Zusätzlich wurde nach Abschluss der Aufgaben Feedback eingeholt.

### Positive Rückmeldungen
- Die Navigation wurde als verständlich wahrgenommen.
- Die Kategorien erleichtern das Finden von Regeln.
- Die Struktur der Detailseiten wurde als übersichtlich bewertet.
- Die Anwendung wirkt modern und professionell.
### Festgestellte Probleme

Die Evaluation zeigte jedoch auch einige Schwachstellen:

#### Fehlender Zurück-Button
  Auf den Kategorien- und Detailseiten existierte ursprünglich kein gut sichtbarer Zurück-Button. Die Testpersonen mussten teilweise den Browser-Zurück-Button verwenden.
#### Zu schlichtes Design
  Die frühen Versionen verwendeten einen hellen Hintergrund. Die Testpersonen empfanden das Erscheinungsbild als wenig ansprechend und nicht ausreichend mit dem Thema Fussball verbunden.
#### Fehlende Zusatzfunktionen
  Zum Zeitpunkt des ersten Tests waren die Bereiche „Fun Facts“ und „Suchen“ noch nicht vollständig umgesetzt.
#### Registrierung noch nicht funktionsfähig
  Die Login-Seite war bereits vorhanden, jedoch bestand noch keine vollständige Verbindung zur MongoDB-Benutzerdatenbank. Eine Registrierung war deshalb noch nicht möglich.

### Umgesetzte Verbesserungen

Basierend auf dem Feedback wurden verschiedene Anpassungen vorgenommen:

#### Verbesserung der Navigation
  Es wurden gut sichtbare grüne Zurück-Buttons eingeführt. Dadurch können Benutzer jederzeit einfach zur vorherigen Seite zurückkehren.
#### Überarbeitung des Designs
  Der Hintergrund wurde durch ein Stadionbild ersetzt. Zusätzlich wurden transparente Karten mit Glassmorphism-Effekt eingeführt. Diese Änderungen verbesserten die visuelle Wirkung der Anwendung deutlich.
#### Erweiterung der Funktionen

Nach dem Test wurden folgende Funktionen fertiggestellt:

- Fun-Facts-Bereich
- Suchfunktion
- Registrierung
- Login
- MongoDB Users Collection

#### Konsistentes Design

Alle Seiten wurden auf ein einheitliches Layout umgestellt. Dadurch entstand ein konsistentes Erscheinungsbild über die gesamte Anwendung hinweg.

#### Fazit der Evaluation

Die Usability-Evaluation zeigte, dass die grundlegende Benutzerführung bereits funktionierte, jedoch noch Verbesserungspotenzial bestand. Durch die identifizierten Schwachstellen konnten gezielte Optimierungen vorgenommen werden.

Die finale Version der Anwendung ist deutlich benutzerfreundlicher, optisch ansprechender und funktional umfangreicher als der ursprünglich getestete Prototyp. Dadurch wurde das Hauptziel erreicht, Fussballregeln einfach und verständlich zugänglich zu machen.

## 4. Erweiterungen [Optional]

### 4.1 Fun-Facts-Bereich
#### Beschreibung & Nutzen

Zusätzlich zu den aktuellen Fussballregeln wurde ein Bereich mit historischen und heute nicht mehr gültigen Regeln entwickelt. Dadurch erhalten Benutzer interessante Hintergrundinformationen zur Entwicklung des Fussballs und können ihr Wissen über die Geschichte des Sports erweitern.

#### Wo umgesetzt
- Frontend: Eigene Übersichtsseite sowie Detailseiten für einzelne Fun Facts
- Backend: Dynamisches Laden der Inhalte aus MongoDB
- Datenbank: Eigene Collection „funfacts“
#### Referenz

Kapitel 3.4.2 Umsetzung (Technik)

#### Aus Evaluation abgeleitet?

Teilweise. Während der Evaluation wurde festgestellt, dass zusätzliche Inhalte den Mehrwert der Anwendung erhöhen würden.

### 4.2 Suchfunktion

#### Beschreibung & Nutzen

Zur Verbesserung der Benutzerfreundlichkeit wurde eine Suchfunktion integriert. Nutzer können dadurch gezielt nach Begriffen wie „Offside“, „Handspiel“ oder „Torwart“ suchen und müssen nicht alle Kategorien manuell durchsuchen.

#### Wo umgesetzt
- Frontend: Suchseite mit Suchfeld und Ergebnisanzeige
- Backend: Verarbeitung der Suchanfrage und Filterung der Daten
- Datenbank: MongoDB-Abfragen auf die Collection „rules“
#### Referenz

Kapitel 3.4.2 Umsetzung (Technik)

#### Aus Evaluation abgeleitet?

Ja. Die Testpersonen äusserten den Wunsch, Regeln schneller finden zu können.

### 4.3 Login und Registrierung

#### Beschreibung & Nutzen

Über die Grundanforderungen hinaus wurde ein Benutzerbereich mit Login- und Registrierungsfunktion umgesetzt. Dadurch können Benutzerkonten erstellt und verwaltet werden.

#### Wo umgesetzt
- Frontend: Login- und Registrierungsseiten
- Backend: Verarbeitung der Anmeldedaten und Passwortprüfung
- Datenbank: MongoDB Collection „users“
#### Referenz

Kapitel 3.4.2 Umsetzung (Technik)

#### Aus Evaluation abgeleitet?

Ja. Während der Evaluation war die Funktion noch nicht vollständig implementiert und wurde anschliessend ergänzt.

### 4.4 Überarbeitung des Designs

#### Beschreibung & Nutzen

Nach der Evaluation wurde das ursprüngliche Design überarbeitet. Die finale Version verwendet einen Stadion-Hintergrund, transparente Karten sowie ein einheitliches Farbschema. Dadurch wirkt die Anwendung professioneller und thematisch passender.

#### Wo umgesetzt
- Frontend: Sämtliche Seiten der Anwendung
- CSS: Anpassung von Layout, Farben und Benutzeroberfläche
#### Referenz

Kapitel 3.4.1 Entwurf (Design)

#### Aus Evaluation abgeleitet?

Ja. Die Testpersonen empfanden das ursprüngliche Design als zu schlicht.

## 5. Projektorganisation [Optional]
Beispiele:
- **Repository & Struktur:** _[Link; kurze Strukturübersicht]_  
- **Issue-Management:** _[Vorgehen kurz beschreiben]_  
- **Commit-Praxis:** _[z. B. sprechende Commits]_

## 6. KI-Deklaration
Die folgende Deklaration ist verpflichtend und beschreibt den Einsatz von KI im Projekt.

### 6.1 KI-Tools
- **Eingesetzte Tools**: _[z. B. Copilot, ChatGPT, Claude, lokale Modelle; Version/Variante wenn bekannt]_
- **Zweck & Umfang**: _[wie, wofür und in welchem Ausmass wurde KI eingesetzt (z. B. Textentwürfe, Codevorschläge, Tests, Refactoring); welche Teile stammen (ganz/teilweise) aus KI-Unterstützung?]_
- **Eigene Leistung (Abgrenzung):** _[was ist eigenständig erarbeitet/überarbeitet worden?]_

### 6.2 Prompt-Vorgehen
_[Überlegungen zu Prompt-Vorgehen, Qualität und Urheberrecht/Quellen. Wie wurde beim Prompting vorgegangen? Zu beschreiben ist die grundlegende Vorgehensweise. Einzelne, konkrete Prompts sollten höchstens als Beispiele aufgeführt werden. ]_

### 6.3 Reflexion
_[Nutzen, Grenzen, Risiken/Qualitätssicherung, ...]_

## 7. Anhang [Optional]
Beispiele:
- **Quellen:** _[verwendete Vorlagen/Assets/Modelle; Lizenz/Urheberrecht; ...]_
- **Testskript & Materialien:** _[Link/Datei]_  
- **Rohdaten/Auswertung:** _[Link/Datei]_  

