/**
 * Database Simulation for Nova Salud
 * This file contains all the data manipulation functions
 * that would normally interact with a real database
 */

// Use localStorage to persist data
class Database {
    constructor() {
        this.initializeDatabase();
    }

    // Initialize database with demo data if empty
    initializeDatabase() {
        // Check if data already exists
        if (!localStorage.getItem('novaProducts')) {
            // Initialize with demo products
            const demoProducts = [
                {
                    id: 'P001',
                    code: 'P001',
                    barcode: '7750074500019',
                    name: 'Paracetamol 500mg x 100 tabletas',
                    category: 'medicamento',
                    laboratory: 'Farmaindustria',
                    buyPrice: 15.50,
                    sellPrice: 22.90,
                    stock: 45,
                    minStock: 10,
                    location: 'Estante A-1',
                    expiryDate: '2026-08-15',
                    description: 'Analgésico y antipirético para alivio del dolor y fiebre.'
                },
                {
                    id: 'P002',
                    code: 'P002',
                    barcode: '7750074500026',
                    name: 'Ibuprofeno 400mg x 50 tabletas',
                    category: 'medicamento',
                    laboratory: 'Laboratorios ABC',
                    buyPrice: 12.80,
                    sellPrice: 18.50,
                    stock: 8,
                    minStock: 10,
                    location: 'Estante A-2',
                    expiryDate: '2026-05-20',
                    description: 'Antiinflamatorio no esteroideo para dolor e inflamación.'
                },
                {
                    id: 'P003',
                    code: 'P003',
                    barcode: '7750074500033',
                    name: 'Loratadina 10mg x 30 tabletas',
                    category: 'medicamento',
                    laboratory: 'MediPharma',
                    buyPrice: 9.20,
                    sellPrice: 14.50,
                    stock: 22,
                    minStock: 8,
                    location: 'Estante B-1',
                    expiryDate: '2026-10-10',
                    description: 'Antihistamínico para tratamiento de alergias.'
                },
                {
                    id: 'P004',
                    code: 'P004',
                    barcode: '7750074500040',
                    name: 'Crema Hidratante Facial 50g',
                    category: 'cosmetico',
                    laboratory: 'DermoCare',
                    buyPrice: 18.00,
                    sellPrice: 29.90,
                    stock: 15,
                    minStock: 5,
                    location: 'Estante C-3',
                    expiryDate: '2027-01-30',
                    description: 'Crema hidratante para todo tipo de piel.'
                },
                {
                    id: 'P005',
                    code: 'P005',
                    barcode: '7750074500057',
                    name: 'Multivitaminico x 60 cápsulas',
                    category: 'suplemento',
                    laboratory: 'NutriLab',
                    buyPrice: 25.40,
                    sellPrice: 42.90,
                    stock: 3,
                    minStock: 5,
                    location: 'Estante D-1',
                    expiryDate: '2026-06-25',
                    description: 'Suplemento de vitaminas y minerales para adultos.'
                },
                {
                    id: 'P006',
                    code: 'P006',
                    barcode: '7750074500064',
                    name: 'Jabón Antibacterial 90g',
                    category: 'higiene',
                    laboratory: 'HygieneMax',
                    buyPrice: 3.20,
                    sellPrice: 5.90,
                    stock: 0,
                    minStock: 10,
                    location: 'Estante E-2',
                    expiryDate: '2027-04-15',
                    description: 'Jabón antibacterial para manos y cuerpo.'
                },
                {
                    id: 'P007',
                    code: 'P007',
                    barcode: '7750074500071',
                    name: 'Omeprazol 20mg x 30 cápsulas',
                    category: 'medicamento',
                    laboratory: 'Farmaindustria',
                    buyPrice: 14.30,
                    sellPrice: 22.50,
                    stock: 18,
                    minStock: 8,
                    location: 'Estante A-4',
                    expiryDate: '2026-09-12',
                    description: 'Inhibidor de la bomba de protones para tratar problemas gástricos.'
                },
                {
                    id: 'P008',
                    code: 'P008',
                    barcode: '7750074500088',
                    name: 'Shampoo Anticaspa 400ml',
                    category: 'higiene',
                    laboratory: 'HairCare',
                    buyPrice: 12.50,
                    sellPrice: 19.90,
                    stock: 7,
                    minStock: 6,
                    location: 'Estante E-3',
                    expiryDate: '2027-03-28',
                    description: 'Shampoo para el tratamiento y prevención de la caspa.'
                },
                {
                    id: 'P009',
                    code: 'P009',
                    barcode: '7750074500095',
                    name: 'Proteína Whey 1kg',
                    category: 'suplemento',
                    laboratory: 'SportNutrition',
                    buyPrice: 85.00,
                    sellPrice: 129.90,
                    stock: 4,
                    minStock: 3,
                    location: 'Estante D-2',
                    expiryDate: '2026-11-30',
                    description: 'Suplemento proteico para deportistas.'
                },
                {
                    id: 'P010',
                    code: 'P010',
                    barcode: '7750074500101',
                    name: 'Amoxicilina 500mg x 30 cápsulas',
                    category: 'medicamento',
                    laboratory: 'MediPharma',
                    buyPrice: 18.60,
                    sellPrice: 28.90,
                    stock: 12,
                    minStock: 8,
                    location: 'Estante A-3',
                    expiryDate: '2026-07-18',
                    description: 'Antibiótico para tratar infecciones bacterianas.'
                }
            ];
            
            localStorage.setItem('novaProducts', JSON.stringify(demoProducts));
            
            // Initialize with demo sales
            const demoSales = this.generateDemoSales();
            localStorage.setItem('novaSales', JSON.stringify(demoSales));
            
            // Initialize with demo activities
            const demoActivities = this.generateDemoActivities();
            localStorage.setItem('novaActivities', JSON.stringify(demoActivities));
            
            console.log('Demo data initialized');
        }
    }
    
}