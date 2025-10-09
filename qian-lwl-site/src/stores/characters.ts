import { defineStore } from 'pinia';

export interface Character {
  id: number;
  name: string;
  role: string;
  description: string;
  outfits: string[];
  currentOutfitIndex: number;
}

export const useCharacterStore = defineStore('characters', {
  state: () => ({
    characters: [
      {
        id: 1,
        name: '星桥理子',
        role: '机智可爱的二次元少女',
        description: '青蓝计划理论研究者后代，DUT与MIT的交换生，对元宇宙专业知识了解通透，属于二次元里面万事通那一类，机智且可爱。',
        outfits: [
          new URL('/src/assets/characters/xingqiao/xingqiao.jpg', import.meta.url).href,
        ],
        currentOutfitIndex: 0
      },
      {
        id: 2,
        name: '凌跃捷',
        role: '体育天赋超群的幼驯染',
        description: '青蓝计划投资者后代，蒋忱的幼驯染，体育天赋超群，小时候以欺负蒋忱为乐，活泼俏皮（富，给蒋忱氪金。分数不够但为了黏蒋忱上了盘锦的中外合办',
        outfits: [
          new URL('/src/assets/characters/ling/ling.jpg', import.meta.url).href,
        ],
        currentOutfitIndex: 0
      },
      {
        id: 3,
        name: '叶怀瑾',
        role: '温柔沉稳的学姐',
        description: '青蓝计划设备维护者后代，温柔沉稳的学姐，托这份关系让蒋忱取得了科研机会（喜欢在句尾加“差不多酱紫',
        outfits: [
          new URL('/src/assets/characters/ye/ye.jpg', import.meta.url).href,
        ],
        currentOutfitIndex: 0
      },
      {
        id: 4,
        name: '蓝',
        role: '青蓝计划实验体',
        description: '青蓝计划实验体，曾因事故出窍灵魂，长期与驻留机器内与AI共事，孤独但坚韧。',
        outfits: [
          new URL('/src/assets/characters/lan/lan_1.png', import.meta.url).href,
          new URL('/src/assets/characters/lan/lan_2.png', import.meta.url).href,
          new URL('/src/assets/characters/lan/lan_3.png', import.meta.url).href,
          new URL('/src/assets/characters/lan/lan_4.png', import.meta.url).href,
        ],
        currentOutfitIndex: 0
      }
    ]
  }),
  getters: {
    getById: (state) => {
      return (id: number) => state.characters.find(c => c.id === id);
    }
  }
});