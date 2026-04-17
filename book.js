import { useState, useEffect } from "react";

export default function JournalApp() {
    const [entries, setEntries] = useState(() => {
        const saved = localStorage.getItem("journalEntries");
        return saved ? JSON.parse(saved) : {};
    });

    const [date, setDate] = useState(new Date());
    const [font, setFont] = useState("cursive");

    useEffect(() => {
        localStorage.setItem("journalEntries", JSON.stringify(entries));
    }, [entries]);

    const key = date.toDateString();

    const handleChange = (e) => {
        setEntries({
            ...entries,
            [key]: e.target.value,
        });
    };

    const changeDay = (offset) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + offset);
        setDate(newDate);
    };

    const fonts = {
        casual: "Arial",
        neat: "Georgia",
        cursive: "cursive",
        bubbly: "Comic Sans MS",
        elegant: "serif",
        rounded: "Verdana",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-6">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-20">
                {/* replace with your own floating icons */}
                <img src="app.jpg" className="absolute top-10 left-10 w-10" />
                <img src="app.jpg" className="absolute bottom-10 right-10 w-10" />
            </div>

            <div className="bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl w-full max-w-4xl p-6 grid grid-cols-2 gap-4">
                {/* Left side (date + navigation) */}
                <div className="flex flex-col items-center justify-center border-r border-pink-200">
                    <div className="flex gap-4 items-center mb-4">
                        <button onClick={() => changeDay(-1)}>◀</button>
                        <span className="text-pink-500 font-semibold">
                            {date.toDateString()}
                        </span>
                        <button onClick={() => changeDay(1)}>▶</button>
                    </div>

                    <div className="text-6xl text-pink-400 font-bold">
                        {date.getDate()}
                    </div>

                    <div className="text-gray-600 mt-2">
                        {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
                    </div>

                    <div className="mt-6 text-sm text-gray-500">
                        ✧ Write your heart out ✧
                    </div>
                </div>

                {/* Right side (journal) */}
                <div className="flex flex-col">
                    {/* Font selector */}
                    <div className="flex gap-2 mb-3 flex-wrap">
                        {Object.keys(fonts).map((f) => (
                            <button
                                key={f}
                                onClick={() => setFont(f)}
                                className={`px-3 py-1 rounded-full text-sm ${font === f ? "bg-pink-300" : "bg-white"}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <textarea
                        value={entries[key] || ""}
                        onChange={handleChange}
                        placeholder="Dear diary..."
                        style={{ fontFamily: fonts[font] }}
                        className="flex-1 resize-none bg-transparent outline-none text-gray-700 leading-7"
                    />
                </div>
            </div>
        </div>
    );
}
