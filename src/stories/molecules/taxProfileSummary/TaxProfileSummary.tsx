import styled from "styled-components";
import { Icon } from "../../atoms/Icon/Icon";
import StatusBox from "../../atoms/statusBox/StatusBox";

interface Props {
  name: string;
  rfc: string;
  address: string;
  taxStatus: "Positivo" | "Negativo" | "Activo";
  opinion: "Positivo" | "Negativo";
}

export default function TaxProfileSummary({
  name,
  rfc,
  address,
  taxStatus,
  opinion,
}: Props) {
  return (
    <StyledTaxProfile>
      <StyledSummary>
        <div className="profile-info">
          <Icon icon="satLogo" />
          <div>
            <p className="name">{name}</p>
            <div className="rfc">
              RFC
              <span>{rfc}</span>
            </div>
          </div>
        </div>
        <p className="subtitle">Domicilio Fiscal</p>
        <p className="address">{address}</p>
        <div className="status">
          <p className="subtitle">Estado fiscal:</p>
          <StatusBox status={taxStatus} />
        </div>
        <div className="status">
          <p className="subtitle">Opinión de cumplimiento:</p>
          <StatusBox status={opinion} />
        </div>
        <StyledShare>
          Compartir
          <Icon icon="shareArrow" size="xsmall" />
        </StyledShare>
      </StyledSummary>
    </StyledTaxProfile>
  );
}

const StyledSummary = styled.div`
  position: relative;
  width: fit-content;
  margin: 30px;
  padding: 32px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 8px;
  .profile-info {
    display: flex;
    gap: 16px;
    align-items: center;
    color: #9fa9ad;
    margin-bottom: 32px;
    .name {
      font-weight: 600;
      color: #000;
      margin-bottom: 12px;
    }
    .rfc {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      span {
        font-weight: 500;
        color: #4b5d63;
        font-size: 16px;
      }
    }
  }
  .subtitle {
    font-size: 16px;
    color: #9fa9ad;
    margin-bottom: 8px;
  }
  .address {
    color: #4b5d63;
    margin-bottom: 32px;
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }
`;

const StyledTaxProfile = styled.div``;

const StyledShare = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: -32px;
  right: 0;
  border: none;
  background-color: transparent;
  outline: none;
  appearance: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.primary};
`;
