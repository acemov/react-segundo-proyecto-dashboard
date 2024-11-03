import ContentRowMovie from "./ContentRowMovie"
import GenreslnDb from "./GenreslnDb"
import UltimaPelicula from "./LastMovieLnDb"
function ContentRowTop() {
    return (
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* // Content Row Movies */}
            <ContentRowMovie />
            {/* // End movies in Data Base */}

            {/* // Content Row Last Movie in Data Base  */}
            <div class="row">

                {/* // Last Movie in DB */}
                <UltimaPelicula />
                {/* // End content row last movie in Data Base */}

                {/* // Genres in DB  */}
                <GenreslnDb />
            </div>
        </div>
    );
}

export default ContentRowTop;