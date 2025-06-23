import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectValue } from "@radix-ui/react-select";

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  function renderInputByComponentType(getsControlItem) {
    let element = null;
    const value = formData[getsControlItem.name] || "";
    switch (getsControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getsControlItem.name}
            placeholder={getsControlItem.placeholder}
            id={getsControlItem.name}
            type={getsControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getsControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getsControlItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getsControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getsControlItem.options && getsControlItem.options.length > 0
                ? getsControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            name={getsControlItem.name}
            placeholder={getsControlItem.placeholder}
            id={getsControlItem.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getsControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <Input
            name={getsControlItem.name}
            placeholder={getsControlItem.placeholder}
            id={getsControlItem.name}
            type={getsControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getsControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
