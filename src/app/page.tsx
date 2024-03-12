import { YamlExample } from '@/components/example';
import { readFile } from 'fs/promises';

import example from '@/yaml/test.yml?stream'
import example2_7 from '@/yaml/2.7.yml?stream'
import example2_8 from '@/yaml/2.8.yml?stream'
import example2_9 from '@/yaml/2.9.yml?stream'
import example2_10 from '@/yaml/2.10.yml'
import example2_11 from '@/yaml/2.11.yml'
import example2_12 from '@/yaml/2.12.yml'


async function getData() {
  const res = await Promise.all([
    readAsPlainText('src/yaml/test.yml'),
    readAsPlainText('src/yaml/2.7.yml'),
    readAsPlainText('src/yaml/2.8.yml'),
    readAsPlainText('src/yaml/2.9.yml'),
    readAsPlainText('src/yaml/2.10.yml'),
    readAsPlainText('src/yaml/2.11.yml'),
    readAsPlainText('src/yaml/2.12.yml'),
])
 
  return res
}

export default async function Home() {
  const [plain, plain2_7, plain2_8, plain2_9, plain2_10, plain2_11, plain2_12] = await getData()

  return (
    <main className="flex flex-wrap min-h-screen items-start p-8 gap-8">
      <YamlExample filename='test.yml' plainTextFile={plain} title={'Custom example'} loadedObject={example}/>
      <YamlExample filename='2.7.yml' plainTextFile={plain2_7} title={'Example 2.7'} loadedObject={example2_7}/>
      <YamlExample filename='2.8.yml' plainTextFile={plain2_8} title={'Example 2.8'} loadedObject={example2_8}/>
      <YamlExample filename='2.9.yml' plainTextFile={plain2_9} title={'Example 2.9'} loadedObject={example2_9}/>
      <YamlExample filename='2.10.yml' plainTextFile={plain2_10} title={'Example 2.10'} loadedObject={example2_10}/>
      <YamlExample filename='2.11.yml' plainTextFile={plain2_11} title={'Example 2.11'} loadedObject={example2_11}/>
      <YamlExample filename='2.12.yml' plainTextFile={plain2_12} title={'Example 2.12'} loadedObject={example2_12}/>
    </main>
  );
}


async function readAsPlainText(filename: string) {
  try {
    const data = await readFile(filename, { encoding: 'utf8' });
    return data;
  } catch {
    return 'Error';
  }
}