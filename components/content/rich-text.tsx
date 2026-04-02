type RichTextProps = {
  html: string;
};

export function RichText({ html }: RichTextProps) {
  return <div className="prose-legal" dangerouslySetInnerHTML={{ __html: html }} />;
}

