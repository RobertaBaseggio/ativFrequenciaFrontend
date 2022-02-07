import React, { HTMLAttributes } from "react";

import { Container } from './styles';

type NotificationProps = HTMLAttributes<HTMLDivElement>;

const Notificacoes: React.FC<NotificationProps> = (props) => {

  return (
    <Container {...props}/>
  )
}

export default Notificacoes;