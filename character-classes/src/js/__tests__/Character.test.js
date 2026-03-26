import Character from '../Character';
import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

describe('Класс Character', () => {
  describe('Конструктор', () => {
    test('должен корректно создавать персонажа с валидными данными', () => {
      const character = new Character('Legolas', 'Bowman');
      expect(character.name).toBe('Legolas');
      expect(character.type).toBe('Bowman');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
    });

    test('должен выбрасывать ошибку при коротком имени', () => {
      expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('должен выбрасывать ошибку при длинном имени', () => {
      expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('должен выбрасывать ошибку при нестроковом имени', () => {
      expect(() => new Character(123, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('должен выбрасывать ошибку при некорректном типе', () => {
      expect(() => new Character('Legolas', 'Elf')).toThrow('Некорректный тип персонажа');
    });
  });
});

describe('Дочерние классы', () => {
  const testCases = [
    { Class: Bowerman, name: 'Legolas', type: 'Bowman', attack: 25, defence: 25 },
    { Class: Swordsman, name: 'Aragorn', type: 'Swordsman', attack: 40, defence: 10 },
    { Class: Magician, name: 'Gandalf', type: 'Magician', attack: 10, defence: 40 },
    { Class: Daemon, name: 'Balrog', type: 'Daemon', attack: 10, defence: 40 },
    { Class: Undead, name: 'Nazgul', type: 'Undead', attack: 25, defence: 25 },
    { Class: Zombie, name: 'Walker', type: 'Zombie', attack: 40, defence: 10 },
  ];

  testCases.forEach(({ Class, name, type, attack, defence }) => {
    describe(Class.name, () => {
      const character = new Class(name);

      test('должен наследовать свойства от Character', () => {
        expect(character).toBeInstanceOf(Character);
      });

      test('должен иметь правильный тип', () => {
        expect(character.type).toBe(type);
      });

      test('должен иметь правильные характеристики', () => {
        expect(character.attack).toBe(attack);
        expect(character.defence).toBe(defence);
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
      });

      test('должен корректно обрабатывать имя', () => {
        expect(character.name).toBe(name);
      });
    });
  });
});