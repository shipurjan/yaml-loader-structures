import { readFile } from 'node:fs/promises';

import example2_7 from '@/2.7.yml?stream'
import example2_8 from '@/2.8.yml?stream'
import example2_9 from '@/2.9.yml?stream'
import example2_10 from '@/2.10.yml'
import example2_11 from '@/2.11.yml'
import example2_12 from '@/2.12.yml'

const plain2_7 = readAsPlainText('src/2.7.yml')
const plain2_8 = readAsPlainText('src/2.8.yml')
const plain2_9 = readAsPlainText('src/2.9.yml')
const plain2_10 = readAsPlainText('src/2.10.yml')
const plain2_11 = readAsPlainText('src/2.11.yml')
const plain2_12 = readAsPlainText('src/2.12.yml')

export default function Home() {
  return (
    <main className="flex flex-wrap min-h-screen items-start p-8 gap-8">
      {printExample("Example 2.7", example2_7, plain2_7)}
      {printExample("Example 2.8", example2_8, plain2_8)}
      {printExample("Example 2.9", example2_9, plain2_9)}
      {printExample("Example 2.10", example2_10, plain2_10)}
      {printExample("Example 2.11", example2_11, plain2_11)}
      {printExample("Example 2.12", example2_12, plain2_12)}
    </main>
  );
}

function printExample(name: string, yaml: unknown, plain: string | Promise<string>) {
  try {
    const json = JSON.stringify(yaml, null, 4)
    return <div>
      <h1 className='text-2xl font-bold leading-relaxed'>{name}</h1>
      <div>File input</div>
      <pre className='leading-none bg-neutral-900 border border-neutral-800 p-1'>
        {plain}
      </pre>
      <div>Parsed output</div>
      <pre className='leading-none bg-neutral-900 border border-neutral-800 p-1'>
        {json}
      </pre>
    </div>
  } catch {
    return 'Error'
  }
}

async function readAsPlainText(filename: string) {
  try {
    const data = await readFile(filename, { encoding: 'utf8' });
    return data;
  } catch {
    return 'Error';
  }
}