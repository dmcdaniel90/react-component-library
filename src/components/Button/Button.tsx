type ButtonProps = {
    backgroundColor: string;
    children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
    return (
        <button className={`cursor-pointer border-2 px-4`}>{children}</button>
    )
}