// server.js (Node + Express + Nodemailer)
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'chiquitodaniel008@gmail.com',
      pass: 'vnkb oydd bfwi kenz',
    },
  });

  const mailOptions = {
    from: email,
    to: 'chiquitodaniel008@gmail.com',
    subject: 'Nova mensagem do formulário de contato',
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail enviado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar e-mail' });
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
