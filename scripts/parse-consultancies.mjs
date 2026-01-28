import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const markdownPath = path.join(__dirname, '../consultancies.md');
const outputPath = path.join(__dirname, 'consultancies-data.json');

function parseMarkdown() {
    const content = fs.readFileSync(markdownPath, 'utf8');
    const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    const consultancies = [];
    let current = {};

    // Helper to save current and reset
    const saveCurrent = () => {
        if (current.name) {
            consultancies.push(current);
        }
        current = {};
    };

    // The file structure seems to be blocks separated by... well, let's look at the lines.
    // Actually, looking at the file content:
    // 1: Top Study Abroad Consultancies in Nepal <- Limit to skip
    // 2: AECC Global <- Name
    // 4: Address: ...
    // ...
    // 24: Edwise Foundation <- Name (How to distinguish name from other fields? key: value vs just string)

    // Strategy: Identify keys. If a line is NOT a key-value pair and not a known header, it's likely a Name.
    // Known keys: Address, Phone, Website, Email, About, Services, Classes, Countries, Logo, Cover Image.

    const knownKeys = [
        'Address', 'Phone', 'Website', 'Email', 'About',
        'Services', 'Classes', 'Countries', 'Logo', 'Cover Image'
    ];

    let isHeader = true; // Skip first line

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (i === 0 && line.includes('Top Study Abroad')) {
            continue;
        }

        const match = line.match(/^([^:]+):\s*(.*)$/);

        if (match && knownKeys.includes(match[1])) {
            // It's a field
            const key = match[1];
            const value = match[2];

            if (!current.name) {
                // Formatting error or continuation? 
                // In this file, Name should come before fields.
                // If we hit a field but have no name, maybe the name was the previous line?
                // But we are processing sequentially.
            }

            switch (key) {
                case 'Address': current.address = value; break;
                case 'Phone': current.phone = value; break;
                case 'Website': current.website = value === 'nan' ? null : value; break;
                case 'Email': current.email = value; break;
                case 'About': current.description = value; break;
                case 'Services': current.services = value.split(',').map(s => s.trim()); break;
                case 'Classes': current.classes = value === 'nan' ? [] : value.split(',').map(s => s.trim()); break;
                case 'Countries': current.countries = value.split(',').map(s => s.trim()); break;
                case 'Logo': current.logoUrl = value === 'nan' ? null : value; break;
                case 'Cover Image': current.coverUrl = value === 'nan' ? null : value; break;
            }
        } else {
            // It's likely a name or a continuation of previous line?
            // "Top Study Abroad" was skipped.
            // If it doesn't have a colon, it's a Name.
            // BUT, verify if it's just a wrapped line? 
            // The file seems to have blank lines between blocks (which we filtered out), 
            // so a line without colon is likely a new Name.
            // Let's assume it is a name.

            if (current.name) {
                saveCurrent();
            }
            current.name = line;
        }
    }

    // Save last one
    saveCurrent();

    console.log(`Parsed ${consultancies.length} consultancies.`);
    fs.writeFileSync(outputPath, JSON.stringify(consultancies, null, 2));
}

parseMarkdown();
