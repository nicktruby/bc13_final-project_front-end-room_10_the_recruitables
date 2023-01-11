function RandNumGen(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function timesTableCalculator(max) {
  const randNumber = RandNumGen(max);
  return randNumber;
}

export function multiply(arr) {
  return arr[0] * arr[1];
}

export function checkAnswer(values, answer) {
  return multiply(values) === answer;
}

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      const db = getFirestore();
      const usersRef = collection(db, "users");
      getDocs(usersRef).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (user.email === doc.data().email) {
            setUserScore(doc.data().score);
            setUserData(doc.data());
          }
        });
      });
    } else {
      setUser(null);
    }
  });
}, []);
console.log(user);
console.log(user.email);
console.log(userData);

//check firebase email against GET request email and display data from score parameter, if not post new user information to backgroundBlendMode:

// eslint-disable-next-line react-hooks/exhaustive-deps
