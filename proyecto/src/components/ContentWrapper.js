import TopBar from "./TopBar"
import ContentRowTop from "./ContentRowTop"
import Footer from "./Footer"

function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">

            {/* // Main Content */}
            <div id="content">
                {/* // Topbar */}
                <TopBar />
                {/* // End of Topbar */}

                {/* // Content Row Top  */}
                <ContentRowTop />
                {/* //End Content Row Top */}
            </div>
            {/* // End of MainContent */}
            {/* // Footer */}
            <Footer />
            {/* // End of Footer */}
        </div>
    );
}

export default ContentWrapper;