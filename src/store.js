import { generateCode } from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
    constructor(initState = {}) {
        this.state = initState;
        this.listeners = []; // Слушатели изменений состояния
    }

    /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
    subscribe(listener) {
        this.listeners.push(listener);
        // Возвращается функция для удаления добавленного слушателя
        return () => {
            this.listeners = this.listeners.filter(item => item !== listener);
        };
    }

    /**
   * Выбор состояния
   * @returns {Object}
   */
    getState() {
        return this.state;
    }

    /**
   * Установка состояния
   * @param newState {Object}
   */
    setState(newState) {
        this.state = newState;
        // Вызываем всех слушателей
        for (const listener of this.listeners) listener()
    }

    /**
   * Добавление новой записи
   */

    addItem(item) {
        this.setState({
            ...this.state,
            cart: [...this.state.cart, this.state.list.find(it => item !== it.code)],
        })
    }

    /**
   * Удаление записи по коду
   * @param code
   */
  
    /**
   * Выделение записи по коду
   * @param code
   */
}

export default Store;
