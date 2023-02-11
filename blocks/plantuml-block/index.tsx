import { FileBlockProps } from "@githubnext/blocks";

export default function (props: FileBlockProps) {
  const { context } = props;
  const { owner, repo, sha, path } = context;

  const fileURL = `https://raw.githubusercontent.com/${owner}/${repo}/${sha}/${path}`
  const plantumlURL = `http://www.plantuml.com/plantuml/proxy?src=${fileURL}`

  return (
    <img
      src={plantumlURL}
    />
  );
}