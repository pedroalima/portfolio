

interface SectionTitleProps {
    text: string
}

export function SectionTitle({ text } : SectionTitleProps) {
    return (
        <div className="sticky py-4 top-0 z-20 bg-[#141D2F]/75 backdrop-blur lg:hidden">
            <h3 className="uppercase font-bold text-slate-200 text-sm tracking-widest">{text}</h3>
        </div>
    );
}