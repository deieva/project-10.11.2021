import '../Assets/Css/History.css';

function History() {
    let acc2 = document.getElementsByClassName("accordion2");
    let index2;
    
    for (index2 = 0; index2 < acc2.length; index2++) {
      acc2[index2].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
    
    return (
        <div>
            <div className="content">
                <h2>History of markup languages</h2>
                <button className="accordion2">GenCode</button>
                <div className="panel">
                    <p>The first well-known public presentation of markup languages in computer text processing was made by William W. Tunnicliffe at a conference in 1967, although he preferred to call it generic coding. It can be seen as a response to the emergence of programs such as RUNOFF that each used their own control notations, often specific to the target typesetting device. In the 1970s, Tunnicliffe led the development of a standard called GenCode for the publishing industry and later was the first chair of the International Organization for Standardization committee that created SGML, the first standard descriptive markup language. Book designer Stanley Rice published speculation along similar lines in 1970. Brian Reid, in his 1980 dissertation at Carnegie Mellon University, developed the theory and a working implementation of descriptive markup in actual use.</p>
                    <p>However, IBM researcher Charles Goldfarb is more commonly seen today as the "father" of markup languages. Goldfarb hit upon the basic idea while working on a primitive document management system intended for law firms in 1969, and helped invent IBM GML later that same year. GML was first publicly disclosed in 1973.</p>
                    <p>In 1975, Goldfarb moved from Cambridge, Massachusetts to Silicon Valley and became a product planner at the IBM Almaden Research Center. There, he convinced IBM's executives to deploy GML commercially in 1978 as part of IBM's Document Composition Facility product, and it was widely used in business within a few years.</p>
                    <p>SGML, which was based on both GML and GenCode, was developed by Goldfarb in 1974.Goldfarb eventually became chair of the SGML committee. SGML was first released by ISO as the ISO 8879 standard in October 1986.</p>
                </div>
                <button className="accordion2">troff and nroff</button>
                <div className="panel">
                    <p>Some early examples of computer markup languages available outside the publishing industry can be found in typesetting tools on Unix systems such as troff and nroff. In these systems, formatting commands were inserted into the document text so that typesetting software could format the text according to the editor's specifications. It was a trial and error iterative process to get a document printed correctly. Availability of WYSIWYG ("what you see is what you get") publishing software supplanted much use of these languages among casual users, though serious publishing work still uses markup to specify the non-visual structure of texts, and WYSIWYG editors now usually save documents in a markup-language-based format.</p>
                </div>
                <button className="accordion2">TeX</button>
                <div className="panel">
                    <p>Another major publishing standard is TeX, created and refined by Donald Knuth in the 1970s and '80s. TeX concentrated on detailed layout of text and font descriptions to typeset mathematical books. This required Knuth to spend considerable time investigating the art of typesetting. TeX is mainly used in academia, where it is a de facto standard in many scientific disciplines. A TeX macro package known as LaTeX provides a descriptive markup system on top of TeX, and is widely used.</p>
                </div>
                <button className="accordion2">Scribe, GML and SGML</button>
                <div className="panel">
                    <p>The first language to make a clean distinction between structure and presentation was Scribe, developed by Brian Reid and described in his doctoral thesis in 1980.[10] Scribe was revolutionary in a number of ways, not least that it introduced the idea of styles separated from the marked up document, and of a grammar controlling the usage of descriptive elements. Scribe influenced the development of Generalized Markup Language (later SGML) and is a direct ancestor to HTML and LaTeX.</p>
                    <p>In the early 1980s, the idea that markup should be focused on the structural aspects of a document and leave the visual presentation of that structure to the interpreter led to the creation of SGML. The language was developed by a committee chaired by Goldfarb. It incorporated ideas from many different sources, including Tunnicliffe's project, GenCode. Sharon Adler, Anders Berglund, and James A. Marke were also key members of the SGML committee.</p>
                    <p>SGML specified a syntax for including the markup in documents, as well as one for separately describing what tags were allowed, and where (the Document Type Definition (DTD) or schema). This allowed authors to create and use any markup they wished, selecting tags that made the most sense to them and were named in their own natural languages. Thus, SGML is properly a meta-language, and many particular markup languages are derived from it. From the late '80s on, most substantial new markup languages have been based on SGML system, including for example TEI and DocBook. SGML was promulgated as an International Standard by International Organization for Standardization, ISO 8879, in 1986.</p>
                    <p>SGML found wide acceptance and use in fields with very large-scale documentation requirements. However, many found it cumbersome and difficult to learn—a side effect of its design attempting to do too much and be too flexible. For example, SGML made end tags (or start-tags, or even both) optional in certain contexts, because its developers thought markup would be done manually by overworked support staff who would appreciate saving keystrokes.
                    </p>
                </div>
                <button className="accordion2">HTML</button>
                <div className="panel">
                    <p>In 1989, computer scientist Sir Tim Berners-Lee wrote a memo proposing an Internet-based hypertext system, then specified HTML and wrote the browser and server software in the last part of 1990. The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet by Berners-Lee in late 1991. It describes 18 elements comprising the initial, relatively simple design of HTML. Except for the hyperlink tag, these were strongly influenced by SGMLguid, an in-house SGML-based documentation format at CERN. Eleven of these elements still exist in HTML 4.</p>
                    <p>Berners-Lee considered HTML an SGML application. The Internet Engineering Task Force (IETF) formally defined it as such with the mid-1993 publication of the first proposal for an HTML specification: "Hypertext Markup Language (HTML)" Internet-Draft by Berners-Lee and Dan Connolly, which included an SGML Document Type Definition to define the grammar. Many of the HTML text elements are found in the 1988 ISO technical report TR 9537 Techniques for using SGML, which in turn covers the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system. These formatting commands were derived from those used by typesetters to manually format documents. Steven DeRose argues that HTML's use of descriptive markup (and influence of SGML in particular) was a major factor in the success of the Web, because of the flexibility and extensibility that it enabled. HTML became the main markup language for creating web pages and other information that can be displayed in a web browser, and is quite likely the most used markup language in the world today.</p>
                </div>

                <button className="accordion2">XML</button>
                <div className="panel">
                    <p>XML (Extensible Markup Language) is a meta markup language that is now widely used. XML was developed by the World Wide Web Consortium, in a committee created and chaired by Jon Bosak. The main purpose of XML was to simplify SGML by focusing on a particular problem—documents on the Internet. XML remains a meta-language like SGML, allowing users to create any tags needed (hence "extensible") and then describing those tags and their permitted uses.</p>
                    <p>XML adoption was helped because every XML document can be written in such a way that it is also an SGML document, and existing SGML users and software could switch to XML fairly easily. However, XML eliminated many of the more complex and human-oriented features of SGML to simplify implementation environments such as documents and publications. However, it appeared to strike a happy medium between simplicity and flexibility, and was rapidly adopted for many other uses. XML is now widely used for communicating data between applications.</p>
                </div>

                <button className="accordion2">XHTML</button>
                <div className="panel">
                    <p>Since January 2000, all W3C Recommendations for HTML have been based on XML rather than SGML, using the abbreviation XHTML (Extensible HyperText Markup Language). The language specification requires that XHTML Web documents must be well-formed XML documents. This allows for more rigorous and robust documents while using tags familiar from HTML.</p>
                    <p>One of the most noticeable differences between HTML and XHTML is the rule that all tags must be closed: empty HTML tags such as &lt; br &gt; must either be closed with a regular end-tag, or replaced by a special form: &lt; br &gt; (the space before the '/' on the end tag is optional, but frequently used because it enables some pre-XML Web browsers, and SGML parsers, to accept the tag). Another is that all attribute values in tags must be quoted. Finally, all tag and attribute names within the XHTML namespace must be lowercase to be valid. HTML, on the other hand, was case-insensitive.</p>
                </div>
            </div>
        </div>
    )
}
export default History;