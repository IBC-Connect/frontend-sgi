export class InformacoesPessoaisUtil {

  public static escolaridade() {
    return [
      { id: 1, valor: 'Não Alfabetizado' },
      { id: 2, valor: 'Ensino Fundamental Completo' },
      { id: 3, valor: 'Ensino Fundamental Incompleto' },
      { id: 4, valor: 'Ensino Médio Completo' },
      { id: 5, valor: 'Ensino Médio Incompleto' },
      { id: 6, valor: 'Ensino Superior Completo' },
      { id: 7, valor: 'Ensino Superior Incompleto' },
      { id: 8, valor: 'Pós-Graduando' },
      { id: 9, valor: 'Pós-Graduado' },
      { id: 10, valor: 'Mestre' },
      { id: 11, valor: 'Doutor' },
      { id: 12, valor: 'Pós-Doutor' },
    ];
  }

  public static parentesco() {
    return [
      { id: 1, valor: 'Mae', texto: 'Mãe' },
      { id: 2, valor: 'Pai', texto: 'Pai' },
      { id: 3, valor: 'Tio', texto: 'Tio(a)' },
      { id: 4, valor: 'Irmao', texto: 'Irmão(ã)' },
      { id: 5, valor: 'Avo', texto: 'Avô(ó)' },
      { id: 6, valor: 'Esposo', texto: 'Esposo(a)' },
      { id: 7, valor: 'Padrato', texto: 'Padrasto' },
      { id: 8, valor: 'Madrasta', texto: 'Madrasta' },
      { id: 9, valor: 'Primo', texto: 'Primo(a)' },
      { id: 10, valor: 'Filho', texto: 'Filho(a)' }
    ];
  }

  public static estadoCivil() {
    return [
      { id: 1, valor: 'Solteiro' },
      { id: 2, valor: 'Casado' },
      { id: 3, valor: 'Divorciado' },
      { id: 4, valor: 'Viúvo' },
    ];
  }
}
