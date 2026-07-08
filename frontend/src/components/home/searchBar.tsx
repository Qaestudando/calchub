export default function searchBar() {
    return (

        <div className="max-w-2xl mx-auto mt-10">

            <input
                type="text"
                placeholder="Pesquisar calculadora..."
                className="
                w-full
                rounded-xl
                border
                p-4
                text-lg
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "
            />

        </div>

    );
}