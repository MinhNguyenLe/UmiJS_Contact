interface account {
  email: string;
  pass: string;
}

export const useVerifyAccount = (users: Array<account>, email: string) => {
  let user;
  users.forEach((item) => {
    if (item.email === email) user = item;
  });
  if (!user) return { error: 'Account not found' };
  else return user;
};
