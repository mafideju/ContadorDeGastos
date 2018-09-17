// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyBnjWQ_FqSIljCLISidpS9ZbZgftfMhOwE',
  authDomain: 'contador-de-gastos.firebaseapp.com',
  databaseURL: 'https://contador-de-gastos.firebaseio.com',
  projectId: 'contador-de-gastos',
  storageBucket: 'contador-de-gastos.appspot.com',
  messagingSenderId: '270712574007'
};

firebase.initializeApp(config);

const database = firebase.database();
const messaging = firebase.messaging();
const auth = firebase.auth();

export { firebase, database as default };

/*
// BUSCANDO DADOS E TRAZENDO PARA A APLICAÇÃO A CADA ATUALIZAÇÃO DO DATABASE
database.ref('expenses').on('value', snapshot => {
  const expenses = [];

  snapshot.forEach(snap => {
    expenses.push({
      id: snap.key,
      ...snap.val()
    });
  });
  console.log(expenses);
});

/*
// OUTROS METODOS QUE DISPARAM COMPORTAMENTO NO DATABASE
database.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
});
/*
// BUSCANDO OBJETOS DE DADOS UMA VEZ E TRAZENDO PARA A APLICAÇÃO
database
  .ref('expenses')
  .once('value')
  .then(snapshot => {
    const expenses = [];

    snapshot.forEach(snap => {
      expenses.push({
        id: snap.key,
        ...snap.val()
      });
    });
    console.log(expenses);
  });

// // CADA SAVE GERA UM NOVO OBJETO NO DATABASE
// database.ref('expenses').push({
//   description: 'Açougue',
//   note: 'Maminha e Alcatra',
//   amount: 150,
//   createdAt: 950058752444
// });

/*
// INSERIR COLEÇÕES DE DADOS NO DATABASE
database.ref('notes').push({
  title: 'Linguagem',
  body: 'React Native'
});

// BUSCAR DADOS DO DATABASE
// automatizado
database.ref().on('value', snapshot => {
  const val = snapshot.val();
  console.log(val);
});
// uma vez apenas
database
  .ref()
  .once('value')
  .then(snapshot => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch(e => {
    console.log('Dados Não Encontrados', e);
  });


// INSERIR DADOS NO BATABASE
database.ref().set({
  nome: 'Marcio',
  idade: 35,
  solteiro: true,
  endereço: {
    rua: 'Migrantes',
    numero: 268,
    bairro: 'Ferrazopolis'
  }
});

// INSERIR MAIS DADOS NO DATABASE
database.ref('endereço/rua').set('Aurora');
database.ref('endereço/bairro').set('Campos Elisios');
database
  .ref('atributos')
  .set({
    peso: 72,
    altura: 1.71
  })
  .then(() => {
    console.log('Dados Enviados com Sucesso');
  })
  .catch(e => {
    console.log('Dados Bloqueados !!! Contatar Administrador', e);
  });

// REMOVER DADOS DO DATABASE
database.ref('solteiro').remove();

// ATUALIZAR (UPDATE) O DATABASE
database.ref().update({
  nome: 'Marcio Rodrigues',
  profissão: 'Programador JS',
  'endereço/numero': 1077
});
*/
