import ReactQuill, { Quill } from "react-quill";
import * as Emoji from "quill-emoji";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";

Quill.register("modules/emoji", Emoji);
export default function MyReactquille({ onChange, value }) {
  // Quill modules configuration
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "video"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["emoji"],
    ["clean"], // remove formatting button
  ];
  const modules = {
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
    "emoji-toolbar": true,
    "emoji-textarea": false,
    "emoji-shortname": true,
  };
  return (
    <div className="mb-32 md:mb-8">
      {" "}
      <ReactQuill
        theme="snow"
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",

          "video",
          "emoji",
          "code-block",
          "script",
          "color",
          "background",
          "align",
          "rtl",
          "clean",
        ]}
        placeholder="Write something amazing..."
        modules={modules}
        onChange={onChange}
        value={value}
        className="h-72 w-full"
      />
    </div>
  );
}
