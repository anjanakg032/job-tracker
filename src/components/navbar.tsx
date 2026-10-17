import { Button } from "./ui/button";
import { SearchBar } from "./ui/searchbar";
import { TypographyH3 } from "./ui/typographyH3";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between pt-1 h-16 w-full bg-blue-200 px-4">
            <TypographyH3>Job Tracker</TypographyH3>
            <div className="flex items-center gap-4">
                <SearchBar/>
                <Button variant="outline">+add</Button>
            </div>
        </div>
    );
}