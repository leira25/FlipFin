import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-12 text-center text-gray-500 text-sm">
            <p>Flip Finance © 2026 • Fastest Solana Launch & Graduation Tracker • Not financial advice • Always DYOR</p>
            <div className="mt-6 flex justify-center gap-8">
                <a href="#" className="hover:text-solana-green">Twitter</a>
                <a href="#" className="hover:text-solana-green">Discord</a>
                <a href="#" className="hover:text-solana-green">Telegram</a>
                <a href="/terms" className="hover:text-solana-green">Terms</a>
            </div>
        </footer>
    );
};

export default Footer;