import React from 'react';
import colors from '../../styles/colors';
import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <Avatar>
              <OnlineStatus />
          </Avatar>

          <RightSide>
              <Button>
                  <MaterialIcons 
                    name="notifications-none"
                    size={26}
                    color={colors.black}
                  />
              </Button>

              <Button>
                  <MaterialCommunityIcons 
                    name="message-outline"
                    size={26}
                    color={colors.black}
                  />
              </Button>

              <Button>
                  <Feather 
                    name="search"
                    size={26}
                    color={colors.black}
                  />
              </Button>
          </RightSide>
      </Container>
  );
}

export default Header;