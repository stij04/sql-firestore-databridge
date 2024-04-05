# SQL Firestore Databridge

## Přehled
Projekt sql-firestore-databridge představuje datový most umožňující synchronizaci dat mezi lokální databází Microsoft SQL Server (Gamifikace) a cloudovou databází Firestore (MobilniSkladnik). Tento most je implementován v Node.js a umožňuje automatizovaný přenos dat.

## Požadavky
- Node.js
- NPM 
- Přístup k instanci Microsoft SQL Serveru
- Přístup k Firestore databázi

## Instalace
Pro instalaci potřebných závislostí spusťte následující příkazy v kořenovém adresáři projektu:
- `npm install dotenv`
- `npm install mssql`
- `npm install firebase-admin`

## Konfigurace
1. `.env`: Tento soubor by měl obsahovat všechny potřebné proměnné prostředí, včetně přihlašovacích údajů k databázi a konfigurace Firebase.
2. `serviceAccountKey.json`: Soubor s přihlašovacími údaji pro Firestore.
3. Upravte `sqlConfig.js` a `firebaseConfig.js` v adresáři config pro nastavení připojení k databázím.

## Spuštění
Datový most se spouští souborem `databridge.js`. Pro spuštění synchronizace spusťte:
- `node databridge.js`

## Struktura adresáře
- `src/`: Hlavní zdrojový kód.
- `config/`: Konfigurační soubory.
- `firestore/`: Skripty pro interakci s Firestore.
- `services/`: Logika pro transfer dat.
- `sql/`: Skripty pro práci s SQL databází.
- `utils/`: Pomocné funkce.

## Autor
Jan Štípek ([stij04@vse.cz](mailto:stij04@vse.cz))