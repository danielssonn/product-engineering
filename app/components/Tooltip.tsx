const Tooltip = ({ text, children }: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    return (
        <div className="relative inline-block">
            <div className="group">
                {children}
                <div className="invisible group-hover:visible absolute z-10 w-48 p-2 mt-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {text}
                </div>
            </div>
        </div>
    );
};
export default Tooltip