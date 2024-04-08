unit Unit1;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, Forms, Controls, Graphics, Dialogs, StdCtrls, ExtCtrls, Spin;

type

  { TForm1 }

  TForm1 = class(TForm)
    ButtonCalculate: TButton;
    EditPizza: TEdit;
    EditPastry: TEdit;
    EditIceCream: TEdit;
    EditCake: TEdit;
    EditDessert: TEdit;
    Label1: TLabel;
    Label2: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    Label5: TLabel;
    LabelOrderPrice: TLabel;
    LabelTotalPrice: TLabel;
    SpinEditPizza: TSpinEdit;
    SpinEditPastry: TSpinEdit;
    SpinEditIceCream: TSpinEdit;
    SpinEditCake: TSpinEdit;
    SpinEditDessert: TSpinEdit;
    procedure ButtonCalculateClick(Sender: TObject);
  private

  public

  end;

var
  Form1: TForm1;

implementation

{$R *.lfm}

{ TForm1 }

procedure TForm1.ButtonCalculateClick(Sender: TObject);
var
  PricePizza, PricePastry, PriceIceCream, PriceCake, PriceDessert: Integer;
  TotalPrice: Integer;
begin
  PricePizza := 75;
  PricePastry := 12;
  PriceIceCream := 15;
  PriceCake := 25;
  PriceDessert := 20; 
  TotalPrice := SpinEditPizza.Value * PricePizza +
                SpinEditPastry.Value * PricePastry +
                SpinEditIceCream.Value * PriceIceCream +
                SpinEditCake.Value * PriceCake +
                SpinEditDessert.Value * PriceDessert;
  LabelTotalPrice.Caption := 'Total Price: ' + IntToStr(TotalPrice) + ' грн.';
end;

end.