export function TopDestinations() {
    // Using unoptimized images because they are external Google URLs from Stitch. 
    return (
        <section className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-slate-900 font-heading tracking-tight">Top Study Destinations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { name: 'Australia', count: '250+ Consultants', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTtBBqrIRe9GeXDGwiCG5mg5KbLKg61kg319qYzshKaASsxuipgLS9RHpeGyDCpEREfOHYVlnNmPvRZxqU31D4Nktn5ZhGpQUT2VKot24jxnVYd9ikb1lQ2EDLSG4w0lj-5bBzjyBO6LQnhI03kHSzJeP-JSyzg9gKQP6pdd_L_2_qRlvSYYFMtuO6JMbZ7D8HjR5Qns4BY43FC2b2Pva5DPHULmbL3iEd6Dr1G7KzlA-XC6_TnKmQAzOtx-j0O0DVeye-m52mtRzO' },
                    { name: 'USA', count: '180+ Consultants', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsByeUGDd4Y1TkEPoZV9wDYMNhM6ho-rbV0mR6WpJiXeMS5itdZW2PgM3DBzsgH7iwCD5ItESeiEohMoH7mh8Iuj8IkCfiO71Nbr-3csOoNheT7GhMZCGyepJJCSPVWXLzZKGe4IF0uyrwbneqBNAgLTpi6XDsirNtnueFnilmB_pQjSeNtM0q9wDfLXPSgri7Kod0_e3PshUMoSaJhH4gpq_fUD-53PrmvuXoID6nrY5UnqnOcjTV3nWBrn_WEOP1ft92CjeSxCzB' },
                    { name: 'Canada', count: '120+ Consultants', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM0_JtNvjFRT61SeO8-TPhY1NbhKLCZUVC3ttuRXqqpgKviXotOiKNfBRk1zsgDU7hV31pTS_emlCW3aWQJuebFbyyoWmIKgDYL_gl1mCirIUnxkDSvzLV9_YWG34sGVOG5xzLSKlsIpPfdly8nWilE1z5FZTLKpeeJLONWBm5yX8AEbVG2qadPnIatXQSthlLhdrX-oMHlaM4p7H3xDAoif-qtnrVOC8WPIVhAy2cJJ0wA2QuRIbZ9XqDWDhVoSgdEFJulVhHT040' },
                    { name: 'UK', count: '95+ Consultants', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcWMynRGL6CsGwt19bQdAhfNMlOa42x9Og_Kn_Q-UX1CykCdCv2FlTSOT0XzZ1TrnhOLURtg7651OhNrdjHn5AcQo7RX1G7njJzffXTsWYIpz0YFFqz0_a6OI7b9gCjXqWtiDyZU11z0i3mi1XFv0s2BDKxw08-pkkVPH3i6Y3YECaoF1Ga2roQlXPS6xAO9axc2q8Ha3AXH-jVGcklo95FDvHRg9IO1v8nF0bQCCBg667DjgvgH0zJO6zlhKxB5BsEucf31VnxWlG' }
                ].map((item) => (
                    <div key={item.name} className="relative group h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src={item.img}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-white text-2xl font-bold font-heading mb-1">{item.name}</h3>
                            <div className="flex items-center gap-2">
                                <div className="h-0.5 w-6 bg-accent"></div>
                                <p className="text-slate-200 text-sm font-medium">{item.count}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
