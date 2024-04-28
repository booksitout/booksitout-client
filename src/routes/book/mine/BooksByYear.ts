import BookResponse from "../BookResponse";

interface BooksByYear {
    [year: number]: BookResponse[];
}

export default BooksByYear