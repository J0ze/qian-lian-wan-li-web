import { defineStore } from 'pinia';
import { ref } from 'vue';

// 定义数据接口，以便 TypeScript 知道数据对象的结构
interface GameData {
  title: string;
  description: string;
}

export const useGameStore = defineStore('game', () => {
  const title = ref('Loading...');
  const description = ref('Loading...');

  async function fetchData() {
    try {
      // 明确指定 Promise 的类型为 <GameData>
      const data: GameData = await new Promise<GameData>(resolve => {
        setTimeout(() => {
          resolve({
            title: '千连万理',
            description: '由大工Galgame同好会打造。'
          });
        }, 500); 
      });

      title.value = data.title;
      description.value = data.description;

    } catch (error) {
      console.error('获取游戏数据失败：', error);
    }
  }

  return { title, description, fetchData };
});