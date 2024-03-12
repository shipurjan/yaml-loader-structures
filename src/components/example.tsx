export type YamlExampleProps = {
    title: string;
    filename: string;
    loadedObject: unknown;
    plainTextFile: string;
};
export const YamlExample = ({ title, filename, loadedObject, plainTextFile }: YamlExampleProps) => {
    return <div>
      <h1 className='text-2xl font-bold leading-relaxed'>{title}</h1>
      <div>{filename}</div>
      <pre className='leading-none bg-neutral-900 border border-neutral-800 p-1'>
        {plainTextFile}
      </pre>
      <div>Parsed output</div>
      <pre className='leading-none bg-neutral-900 border border-neutral-800 p-1'>
        {stringify(loadedObject)}
      </pre>
    </div>
};

function stringify(yaml: unknown) {
  try {
    const json = JSON.stringify(yaml, null, 4)
    return json;
  } catch {
    return 'Error'
  }
}
